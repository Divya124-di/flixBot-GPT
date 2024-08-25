export const checkValidateData = (email, password)=>{
    const isValidateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidatePassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

      if(!isValidateEmail) return "Email is not valid";
       if (!isValidatePassword) return "password is not valid";
       return null;
}