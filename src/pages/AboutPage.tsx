import React from 'react';

// // Sample data for team members

const teamMembers = [
    {
        id: 1,
        name: 'John Doe',
        role: 'CEO',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D/150',
        bio: "John is the visionary leader with over 20 year of experience on the industry",

    },
    {
        id: 2,
        name: 'Jane Smith',
        role: 'CTO',
        image: 'https://images.unsplash.com/photo-1559718062-361155fad299?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/150',
        bio: 'Jane is a tech enthusiast with a person for innovative solutions.',

    },
    {
        id: 3,
        name: "Emily Johnson",
        role: "COO",
        image: 'https://plus.unsplash.com/premium_photo-1670884522719-d7f4bcdfcbeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D/150',
        bio: "Emily oversees operation with a focus on efficiency and quality.",

    },
    {
        id: 4,
        name: "Michael Brown",
        role: "Chief Marketing Officer",
        image: "https://images.unsplash.com/photo-1549473448-5d7196c91f48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D/150",
        bio: "Michael is a marketing guru with a knack for brand building and customer engagement.",
      },
      {
        id: 5,
        name: "Sarah Davis",
        role: "Chief Financial Officer",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8/150",
        bio: "Sarah is responsible for managing financial risks and planning for future growth.",
      },
      {
        id: 6,
        name: "David Wilson",
        role: "Chief Product Officer",
        image: "https://images.unsplash.com/photo-1548964095-b9a292144866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D/150",
        bio: "David leads product development with a focus on innovation and user experience.",
      },
];

const storeLocations = [
    {
        id: 1,
        name: 'Main Store',
        address: '123 Main Street, Anytown, USA',
        phone: "(123) 456-7890",
        image: 'https://plus.unsplash.com/premium_photo-1664305032567-2c460e29dec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RvcmUlMjBwaWN0dXJlfGVufDB8fDB8fHww',
    },
    {
        id: 2,
        name: "Downtown Store",
        address: "456 Downtown Ave, Metropolis, USA",
        phone: "(987) 654-3210",
        image: "https://media.istockphoto.com/id/1333809608/photo/overhead-image-of-people-buying-in-the-large-supermarket.jpg?s=2048x2048&w=is&k=20&c=iA3X8U6FrsSyjbl_xKqRjpU5gyKmA_Axvr0IblyQhWU=",
    }
];





const AboutPage: React.FC = () => {
    return (
        <div className='max-w-4xl mx-auto p-4'>

            {/* Company information */}
            <section className='mb-8'>
              <h2 className='text-3xl font-bold mb-4 text-center'>About Our Company</h2>
              <p className='text-gray-700 text-center'>
                 Welcome to our e-commerce website! We specialize in sporting goods and
                 strive to provide the best products for our customers. Our commitment
                 to quality and customer satisfaction sets us apart from the competition. 
              </p>
            </section>

            {/* Mission and Vision Statement   */}
          <section className='mb-8'>
           <h3 className='text-2xl font-bold mb-4 text-center'>Mission & Vision</h3>
           <div className='flex flex-col md:flex-row gap-8'>
             <div className='flex-1'>
                <h4 className='text-xl font-semibold mb-2'>Our Mission</h4>
                <p className='text-gray-700'>
                Our mission is to empower athletes and enthusiasts with high-quality sporting goods that enhance performance and enjoyment.  
                </p>
             </div>
             <div className='flex-1'>
                <h4 className='text-xl font-semibold mb-2'>Our Vision</h4>
                <p className='text-gray-700'>
                Our vision is to become the leading provider of sporting goods globally, inspiring people to pursue active lifestyles.  
                </p>
             </div>
            </div>   
         </section>  

         {/* Contact Information  */}
         <section className='mb-8'>
            <h3 className='text-2xl font-bold mb-4 text-center'>Contact Information</h3>
             <div className='text-center'>
                <p className='text-gray-700 mb-2'>Email: info@ourcompany.com</p>
                <p className='text-gray-700 mb-2'>Phone: (123) 456-7890</p>
                <p className='text-gray-700'>Address: 123 Main Street, Anytown, USA</p>
             </div>
         </section>
        
        {/* Our Team Section  */}
       <section className='mb-8'>
        <h3 className="text-2xl font-bold mb-4 text-center">Our Team</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member)=> (
            <div key={member.id} className='bg-white shadow-md rounded-lg p-4 w-64 text-center  hover:bg-gray-100'>
                <img src={member.image}
                 alt={member.name} 
                 className='w-32 h-32 rounded-full mx-auto mb-4'/>
                 <h4 className='text-lg font-semibold mb-2'>{member.name}</h4>
                 <p className='text-gray-600 mb-2'>{member.role}</p>
                 <p className='text-gray-700'>{member.bio}</p>
            </div>
          ))}
        </div>
        </section>
        {/* Store Location Information */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-center">Our Store Locations</h3>
        <div className="flex flex-col md:flex-row gap-8">
          {storeLocations.map((location) => (
            <div
              key={location.id}
              className="bg-white shadow-md rounded-lg p-4 flex-1"
            >
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h4 className="text-lg font-semibold mb-2">{location.name}</h4>
              <p className="text-gray-700 mb-2">{location.address}</p>
              <p className="text-gray-700">Phone: {location.phone}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    );
};

export default AboutPage;









