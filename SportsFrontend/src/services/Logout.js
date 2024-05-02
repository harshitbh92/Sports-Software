
export default function Logout(){
    localStorage.removeItem("thapar_token","User_Name");
    localStorage.removeItem("User_Email");
    
}