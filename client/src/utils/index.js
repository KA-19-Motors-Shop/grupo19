import axios from "axios";

export const getAddressInfo = async (e) => {
  if (e.target.value.length === 9) {
    const baseUrlCep = `https://viacep.com.br/ws/${e.target.value.replace(
      "-",
      ""
    )}/json/`;
    await axios
      .get(baseUrlCep)
      .then((res) => {
        const data = res.data?.erro;
        if (!data) {
          const { uf, localidade, complemento, logradouro, bairro } = res.data;
          document.getElementById("uf").value = uf;
          document.getElementById("city").value = localidade;
          document.getElementById("complement").value = complemento;
          document.getElementById("street").value = logradouro;
          document.getElementById("neighborhood").value = bairro;
        }
      })
      .catch((err) => console.log(err));
  }
};

export const testBirthdate = (value) => {
  const [year, month, day] = value.split("-");
  const now = new Date();
  const birthYear = Number(year);
  const birthMonth = Number(month);
  const birthDay = Number(day);
  const nowDay = now.getDate();
  const nowMonth = now.getMonth() + 1;
  const nowYear = now.getFullYear();
  if (nowYear - birthYear > 18) return true;
  if (nowYear - birthYear === 18 && birthMonth < nowMonth) return true;
  if (
    nowYear - birthYear === 18 &&
    birthMonth === nowMonth &&
    birthDay <= nowDay
  )
    return true;
  return false;
};

export const testCep = async (value) => {
  let cepValid = false;
  if (value.length === 9) {
    const baseUrlCep = `https://viacep.com.br/ws/${value.replace(
      "-",
      ""
    )}/json/`;
    await axios
      .get(baseUrlCep)
      .then((res) => {
        const data = res.data?.erro;
        if (!data) cepValid = true;
      })
      .catch((err) => console.log(err));
    return cepValid;
  }
  return false;
};

export const brazillianUFs = [
  "AC",
  "Al",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];
