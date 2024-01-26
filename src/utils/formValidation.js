import Joi from "joi-browser";

function validate(data, schema) {
  // console.log("data: ", data);
  const errors = {};
  const { error } = Joi.validate(data, schema, { abortEarly: false });
  if (!error) return {};
  for (let item of error.details) {
    errors[item.path[0]] = item.message;
  }
  return errors;
}

function validateProperty(data, schema) {
  return validate(data, schema);
}

export const handleSubmit = (e, data, schema) => {
  e.preventDefault();

  const errors = validate(data, schema);
  if (Object.keys(errors).length !== 0) return { status: false, errors };

  // call server
  return { status: true, errors: {} };
};

export const handleChange = (input, data, name, schema) => {
  const temp_data = { ...data };
  temp_data[name] = input.value;
  const d = { [name]: temp_data[name] };
  const s = { [name]: schema[name] };
  const errors = validateProperty(d, s);
  if (Object.keys(errors).length !== 0)
    return { status: false, errors, retData: temp_data };

  return { status: true, errors: {}, retData: temp_data };
};
