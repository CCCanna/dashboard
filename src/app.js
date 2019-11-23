export class App {
  message = '以下是通知消息from CCCanna@github.com';
  noticeData = [];
  noticeMessage = '';
  noticeTitle = '';

  addNotice() {
    if (this.noticeMessage && this.noticeTitle) {
      this.noticeData.push({
        title: this.noticeTitle,
        message: this.noticeMessage
      });
      this.noticeMessage = '';
      this.noticeTitle = '';
    }
  }
}
