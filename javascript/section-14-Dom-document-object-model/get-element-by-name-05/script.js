function collectData() {
  const languageProficiencyEle = document.getElementsByName(
    "languageProficiency",
  );

  console.log(languageProficiencyEle);

  // looping through the node list and selecting the check one
  for (let index = 0; index < languageProficiencyEle.length; index++) {
    if (languageProficiencyEle[index].checked) {
      console.log(
        `selected language is ${languageProficiencyEle[index].value}`,
      );
    }
  }

  const emailEml = Document.getElementsByName("email");
  console.log(emailEml);

  const nameEle = document.getElementsByName("username");
  console.log(nameEle);
}

collectData();
