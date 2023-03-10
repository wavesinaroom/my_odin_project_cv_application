function General(){


  return(
    <div>
      <label for="name">Candidate&apos;s name</label>
      <input type="text" className="name" name="name" required size="10"/>
      <label for="phone">Phone</label>
      <input type="tel" className="phone" name="phone" required size="10"/>
      <label for="e-mail">E-mail</label>
      <input type="email" className="e-mail" name="e-mail" required size="10"/>
    </div>
  );
}

export default General;

