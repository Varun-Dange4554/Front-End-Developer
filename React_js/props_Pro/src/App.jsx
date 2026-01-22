import { Card } from './components/card'


const App = () => {


  const jobOpenings = [
  {
    brandLogo: "https://www.keyweo.com/wp-content/uploads/2021/09/Diseno-sin-titulo-9.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45, // dollars per hour
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/02/Apple-Logo.png",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: 85,
    location: "Remote, India"
  },
  {
    brandLogo: "https://www.shutterstock.com/image-photo/new-york-usa-july-17-260nw-2659171287.jpg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 60,
    location: "Noida, India"
  },
  {
    brandLogo: "https://grapheine.com/wp-content/uploads/2018/10/uber-logo-2560x1576.webp",
    companyName: "Uber",
    datePosted: "2 months ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 75,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-0sgMITwNqzwWbNZfDxjhGmmje755YgLHQ&s",
    companyName: "Airbnb",
    datePosted: "6 weeks ago",
    post: "Product Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 65,
    location: "Remote, India"
  },
  {
    brandLogo: "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark%26Wordmark-White-Dark-Background-Logo.wine.svg",
    companyName: "Tesla",
    datePosted: "8 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Pune, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/04/Oracle-Logo.jpg",
    companyName: "Oracle",
    datePosted: "10 weeks ago",
    post: "Cloud Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 68,
    location: "Mumbai, India"
  }
];





  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){

      return   <Card   company={elem.companyName }  posted={elem.datePosted}  post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}   logo={elem.brandLogo}/>

      })}

    </div>
  )
}

export default App
