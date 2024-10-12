function sent() {
  const description = $('#desc').val();
  const image = $('#image').val();
  if (description !== '') {
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
      description: description,
      photo: image,
      time: date.hour + ':' + date.minute + ':' + date.second,
      date: date.day + '-' + date.month + '-' + date.year
   }
  appendToJsonFile(formData);
  } else {
    alert('Enter the all data!');
  }
}
