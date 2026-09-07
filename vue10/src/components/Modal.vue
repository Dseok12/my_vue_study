<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-danger"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    모달
  </button>

  <!-- Modal -->
  <div
    class="modal fade modal-dialog modal-dialog-centered"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">제목 :</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">내용내용내용내용내용내용내용</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            닫기
          </button>
          <button type="button" class="btn btn-success">확인</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
