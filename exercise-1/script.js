const listUsers = async () => {
  const response = await fetch(
    "https://5dc588200bbd050014fb8ae1.mockapi.io/assessment"
  );
  const users = await response.json();
  var template = document.getElementById("template").innerHTML;

  var DateFormats = {
    short: "DD MMMM - YYYY",
    long: "dddd DD.MM.YYYY HH:mm",
  };
  Handlebars.registerHelper("formatDate", function (datetime, format) {
    if (moment) {
      format = DateFormats[format] || format;
      return moment(datetime).format(format);
    } else {
      return datetime;
    }
  });
  var compiled_template = Handlebars.compile(template);

  var rendered = compiled_template({
    users,
  });
  document.getElementById("target").innerHTML = rendered;
};

window.onload = async function fetchAll() {
  await listUsers();
};
