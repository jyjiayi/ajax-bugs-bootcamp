const submitForm = () => {
  const requestBody = {};
  requestBody.problem = document.getElementById('problem').value;
  requestBody.errorText = document.getElementById('errorText').value;
  requestBody.commit = document.getElementById('commit').value;

  axios
    .post('/create', requestBody)
    .catch((error) => {
      console.log(error);
    });
};

const createLabel = (labelFor, labelText) => {
  const labelElement1 = document.createElement('label');
  labelElement1.for = labelFor;
  labelElement1.innerText = labelText;
  return labelElement1;
};

const createInput = (inputType, inputName, inputId, inputRequired) => {
  const inputElement1 = document.createElement('input');
  inputElement1.type = inputType;
  inputElement1.name = inputName;
  inputElement1.id = inputId;
  inputElement1.required = inputRequired;
  return inputElement1;
};

const createBr = () => {
  const lineBreak = document.createElement('br');
  return lineBreak;
};

const createForm = () => {
  const problemLabel = createLabel('problem', 'problem');
  const problemInput = createInput('text', 'problem', 'problem', 'required');
  const errorTextLabel = createLabel('errorText', 'errorText');
  const errorTextInput = createInput('text', 'errorText', 'errorText', '');
  const commitLabel = createLabel('commit', 'commit');
  const commitInput = createInput('text', 'commit', 'commit', '');
  const submitBtn = createInput('submit', 'Submit', '', '');
  submitBtn.onclick = submitForm;

  const formDiv = document.createElement('div');
  formDiv.appendChild(createBr());
  formDiv.appendChild(problemLabel);
  formDiv.appendChild(problemInput);
  formDiv.appendChild(createBr());
  formDiv.appendChild(errorTextLabel);
  formDiv.appendChild(errorTextInput);
  formDiv.appendChild(createBr());
  formDiv.appendChild(commitLabel);
  formDiv.appendChild(commitInput);
  formDiv.appendChild(createBr());
  formDiv.appendChild(submitBtn);

  const formElement = document.querySelector('form');
  formElement.appendChild(formDiv);

  document.querySelector('button').hidden = true;
};

const createButton = () => {
  const buttonElement = document.createElement('button');
  buttonElement.innerHTML = 'Create a Bug';
  document.body.appendChild(buttonElement);
  buttonElement.addEventListener('click', () => {
    createForm();
    pElement.innerText = '';
  });
};

createButton();
