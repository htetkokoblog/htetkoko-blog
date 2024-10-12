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
    // Convert to 12-hour format
    let ampm = date.hour >= 12 ? 'PM' : 'AM';
    let hour12 = date.hour % 12;
    hour12 = hour12 ? hour12 : 12; // the hour '0' should be '12'

    const formData = {
      description: description,
      photo: image,
      time: hour12 + ':' + String(date.minute).padStart(2, '0') + ' ' + ampm,
      date: date.day + '-' + date.month + '-' + date.year
   }
  appendToJsonFile(formData);
  } else {
    alert('Enter the all data!');
  }
}
