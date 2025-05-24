
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cafe-brown mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Come and experience the warmth of dcofee.cup in person
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="border-cafe-cream shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-cafe-brown mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-cafe-brown mb-2">Location</h3>
                    <p className="text-gray-600">
                      123 Coffee Street<br />
                      Downtown District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-cafe-cream shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-cafe-brown mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-cafe-brown mb-2">Opening Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                      <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
                      <p className="text-cafe-brown font-medium">We're open every day!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-cafe-cream shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-cafe-brown" />
                    <div>
                      <h4 className="font-semibold text-cafe-brown">Phone</h4>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cafe-cream shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-cafe-brown" />
                    <div>
                      <h4 className="font-semibold text-cafe-brown">Email</h4>
                      <p className="text-gray-600">hello@dcofee.cup</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              onClick={openWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with us on WhatsApp
            </Button>
          </div>

          <div className="lg:pl-8">
            <Card className="border-cafe-cream shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-cafe-warm p-6 text-center">
                  <h3 className="text-xl font-semibold text-cafe-brown mb-2">Find Us Here</h3>
                  <p className="text-gray-600">Located in the heart of downtown</p>
                </div>
                <div className="h-96 bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Google Maps integration</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
