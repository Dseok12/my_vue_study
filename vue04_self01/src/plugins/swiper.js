// src/plugins/swiper.js
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/swiper-bundle.css';

function createId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function safeStart(swiper) {
  if (!swiper || !swiper.autoplay) return false;
  try {
    swiper.autoplay.start();
    return true;
  } catch (e) {
    return false;
  }
}

function safeStop(swiper) {
  if (!swiper || !swiper.autoplay) return false;
  try {
    swiper.autoplay.stop();
    return true;
  } catch (e) {
    return false;
  }
}

function createSwiperManager() {
  const registry = new Map(); // id -> {swiper, scope}
  const scopes = new Map(); // scope -> Set<id>

  function ensureScope(scope) {
    const key = scope || '__default__';
    if (!scopes.has(key)) scopes.set(key, new Set());
    return key;
  }

  function register(swiper, meta = {}) {
    if (!swiper) return '';
    const id = meta.id ? String(meta.id) : createId();
    const scopeKey = ensureScope(meta.scope);

    unregister(id);

    registry.set(id, { swiper, scope: scopeKey });
    scopes.get(scopeKey).add(id);

    // destroy 시 자동 제거(지원되는 경우)
    try {
      if (typeof swiper.on === 'function') {
        swiper.on('destroy', () => unregister(id));
      }
    } catch (e) {}

    return id;
  }

  function unregister(id) {
    if (!id) return;
    const key = String(id);
    const item = registry.get(key);
    if (!item) return;

    registry.delete(key);
    const set = scopes.get(item.scope);
    if (set) {
      set.delete(key);
      if (set.size === 0) scopes.delete(item.scope);
    }
  }

  function get(id) {
    const item = registry.get(String(id));
    return item ? item.swiper : null;
  }

  function getIdsByScope(scope) {
    const key = ensureScope(scope);
    const set = scopes.get(key);
    return set ? Array.from(set) : [];
  }

  function getAllIds() {
    return Array.from(registry.keys());
  }

  // ✅ 회장님 요청: true/false로 autoplay 제어
  function fncSwiperAutoPlay(isRun, options = {}) {
    const run = isRun === true;
    const stop = isRun === false;
    if (!run && !stop) return { ok: 0, fail: 0, total: 0 };

    let targetIds = [];
    if (Array.isArray(options.ids) && options.ids.length) {
      targetIds = options.ids.map(String);
    } else if (typeof options.scope === 'string' && options.scope) {
      targetIds = getIdsByScope(options.scope);
    } else if (options.all === true) {
      targetIds = getAllIds();
    } else {
      targetIds = getIdsByScope('__default__');
    }

    let ok = 0;
    let fail = 0;
    for (const id of targetIds) {
      const swiper = get(id);
      if (!swiper) {
        fail++;
        continue;
      }
      const success = run ? safeStart(swiper) : safeStop(swiper);
      if (success) ok++;
      else fail++;
    }
    return { ok, fail, total: targetIds.length };
  }

  function fncSwiperRegister(swiper, scope) {
    return register(swiper, { scope: scope || '__default__' });
  }

  function fncSwiperUnregister(id) {
    unregister(id);
  }

  return {
    modules: { Autoplay },
    register,
    unregister,
    get,
    getIdsByScope,
    getAllIds,
    fncSwiperAutoPlay,
    fncSwiperRegister,
    fncSwiperUnregister,
  };
}

export default {
  install(app) {
    // ✅ 전역 컴포넌트 등록은 여기서만
    app.component('Swiper', Swiper);
    app.component('SwiperSlide', SwiperSlide);

    // ✅ 모듈 전역 제공(기존 코드 호환)
    app.config.globalProperties.$swiperModules = { Autoplay };
    app.provide('swiperModules', { Autoplay });

    // ✅ 전역 매니저 제공
    const manager = createSwiperManager();
    app.config.globalProperties.$swiper = manager;
    app.provide('swiper', manager);
  },
};
