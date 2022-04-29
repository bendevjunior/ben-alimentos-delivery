window.onload = () => {
  console.log("Ola mentorados baum ?");

  // essa funcao e assicrona
  async function pegaProdutos() {
    const response = await fetch("https://bendevoficial.com/api/mentoria/produtos").then((res) => {
      return res.json();
    });
    console.log(response)
  }

  pegaProdutos()
};
