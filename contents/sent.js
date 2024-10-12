function sent() {
  const title = $('#title').val();
  const message = $('#message').val();
  const image = $('#image').val();
  if (title !== '' && message !== '' && image !== '') {
    let currentDate = new Date();
    let date = {
      day: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
      hour: currentDate.getHours(),
      minute: currentDate.getMinutes(),
      second: currentDate.getSeconds()
    }
    const formData = {
      title: title,
      message: message,
      photo: image,
      time: date.hour + ':' + date.minute + ':' + date.second,
      date: date.day + '-' + date.month + '-' + date.year
   }
  appendToJsonFile(formData);
  } else {
    alert('Enter the all data!');
  }
}
