import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useForm } from '@formspree/react';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Swal from 'sweetalert2'
import { CONTACT_DATA } from "../constants";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Contact = () => {
  const position = [23.4121, 85.4384]; // Coordinates for BIT Mesra, Ranchi, India

  const [state, handleSubmit] = useForm("mdkkgpwp");
  if (state.succeeded) {
    Swal.fire({
      title: "Success!",
      text: "Message sent successfully!",
      icon: "success"
    });
  }

  
  return (
    <section
      className="py-20 bg-gradient-to-b from-fcbluelight via-fcblue to-[#0e91e9]"
      id="contact"
    >
      <div className="container mx-auto px-16">
        <h1 className="section-title mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Section */}
          <div className="space-y-8 bg-white/25 p-8 rounded-lg backdrop-blur-md">
            {/* Address */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <FaMapMarkerAlt className="text-gray-800 text-3xl" />
              <div>
                <h3 className="text-xl font-bold">Our Address</h3>
                <p className="text-black">{CONTACT_DATA.address}</p>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="mt-6">
              <MapContainer
                center={position}
                zoom={15}
                className="mx-auto h-36 w-[75%] rounded-lg shadow-lg"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>{CONTACT_DATA.address}</Popup>
                </Marker>
              </MapContainer>
            </div>

            {/* Phone Contacts */}
            <div>
              <h3 className="text-xl font-bold mb-4">Call Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CONTACT_DATA.phone.map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <FaPhoneAlt className="text-gray-800 text-2xl" />
                    <div>
                      <p className="text-black font-semibold">{contact.name}</p>
                      <p className="text-black">{contact.designation}</p>
                      <p className="text-black">{contact.number}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-gray-800 text-3xl" />
              <div className="w-full">
                <h3 className="text-xl font-bold">Email Us</h3>
                <p className="text-black text-sm break-words">
                  {CONTACT_DATA.email}
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white/25 backdrop-blur-md p-8 rounded-lg shadow-lg">
            <h3 className="py-6 section-title ">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              {CONTACT_DATA.formFields.map((field, index) =>
                field.type === "textarea" ? (
                  <textarea
                    key={index}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full p-4 mb-4 bg-white/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={field.rows}
                    required
                  ></textarea>
                ) : (
                  <input
                    key={index}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full p-4 mb-4 bg-white/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                )
              )}
              <button
                type="submit" value="send"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
