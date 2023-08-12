import "./Profile.css"
const Profile= ({name, email,pNumber, avatar}) =>{
return (
<div className="containers">
   <div className="image">
     <img src = {avatar} />
   </div>
   <div>
     <div>{name}</div>
     <div>{email}</div>
     <div>{pNumber}</div>
   </div>
</div>
)
};
export default Profile;