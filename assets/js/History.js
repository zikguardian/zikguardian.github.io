const timelineButtons = document.querySelectorAll(".timeline-button");
const timelineItems = document.querySelectorAll(".timeline-item");

timelineButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const year = button.dataset.year;

    // 버튼 활성화 상태 변경
    timelineButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // 연혁 내용 표시
    timelineItems.forEach((item) => item.classList.remove("active"));
    timelineItems[index].classList.add("active");
  });
});
