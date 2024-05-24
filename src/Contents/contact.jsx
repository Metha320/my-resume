import "../Style/contact.css"

export const Contact = [
    {icon: 'fa-solid fa-phone', infos: '0990590521'},
    {icon: 'fa fa-envelope', infos: 'meta_jankarn@hotmail.com'},
    {icon: 'fa fa-address-card', infos: 'Thamai, Chanthaburi'},
    {icon: 'fa-solid fa-person-military-pointing', infos: 'Military status: Completed'
}]

function Icontact() {
    return (
      <>
      {Contact.map(function(data, index) {
        return (
          <>
          <i key={index} className={data.icon}>&nbsp;&nbsp;<h5>{data.infos}</h5></i><br key={index}/>
          </>
        )
      })}
      </>
  
    )
  }
  export default Icontact;