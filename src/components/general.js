function General(){


  return(
    <div>
      <label for="name">Candidate&apos;s name</label>
      <input type="text" id="name" name="name" required size="10"/>
      <label for="phone">Phone</label>
      <input type="text" id="phone" name="phone" required size="10"/>
      <label for="e-mail">E-mail</label>
      <input type="e-mail" id="e-mail" name="e-mail" required size="10"/>
    </div>
  );
}

export default General;

