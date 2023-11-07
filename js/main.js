import { validateForm } from "./utils/utils.js";

const EMAILJSPUBLICKEY = "5LM1nEi9m2QsBINoS";

emailjs.init(EMAILJSPUBLICKEY);

async function onSubmit() {
  const emailParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  console.log(emailParams);
  if (!validateForm(emailParams)) return;

  const serviceId = "service_zfb1rtn";
  const templateId = "template_lklhjta";

  const res = await emailjs
    .send(serviceId, templateId, emailParams)
    .catch((err) => console.log(err));

  swal({
    icon: "success",
    title: "Email Sent",
    text: "Thank you for reaching out!",
  });
  clearForm();
}

function clearForm() {
  const inputs = Array.from(
    document.querySelectorAll("#email, #name, #message")
  );
  inputs.forEach((input) => {
    input.value = "";
  });

  console.log(inputs);
}

document.getElementById("submit").addEventListener("click", onSubmit);
