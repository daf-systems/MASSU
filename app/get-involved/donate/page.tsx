// massu-app/app/get-involved/donate/page.tsx

import Link from "next/link";
import Image from "next/image";
import { FaMoneyBillWave } from "react-icons/fa";

export default function DonatePage() {
  return (
    <main className="bg-gray-50 font-sans antialiased text-gray-800">
      {/* Breadcrumb - Slightly softer color for subtlety */}
      <nav className="bg-yellow-300/80 text-sm py-4 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <ol className="list-reset flex items-center">
            <li>
              <Link href="/" className="text-blue-700 font-medium hover:underline transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2 text-gray-700">/</span>
            </li>
            <li>
              <Link href="/get-involved" className="text-blue-700 font-medium hover:underline transition-colors duration-200">
                Get Involved
              </Link>
            </li>
            <li>
              <span className="mx-2 text-gray-700">/</span>
            </li>
            <li className="font-semibold text-gray-900">Donate</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section - Enhanced overlay for better text contrast */}
      <section
        aria-labelledby="donate-hero"
        className="relative bg-cover bg-center py-28 px-8 flex items-center justify-center" // Increased padding for more presence
        style={{ backgroundImage: "url('/images/donate-hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div> {/* Darker overlay */}
        <div className="relative max-w-4xl mx-auto text-center text-white p-8 rounded-lg shadow-xl backdrop-blur-sm"> {/* More prominent shadow and subtle blur */}
          <h1 id="donate-hero" className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight drop-shadow-lg"> {/* Larger, bolder heading */}
            Make a Significant Donation
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed"> {/* Larger, lighter text */}
            Every contribution, big or small, makes a significant difference in a student's life. Thank you for your generosity!
          </p>
        </div>
      </section>

      {/* Donation Details Section - Improved container and internal spacing */}
      <section className="py-16 px-8 max-w-6xl mx-auto"> {/* Wider max-width for content */}
        <div className="bg-white p-10 rounded-xl shadow-2xl border border-blue-50"> {/* More padding, rounded, stronger shadow, subtle border */}
          <h2 className="text-4xl font-bold text-blue-800 mb-8 flex items-center gap-4"> {/* Larger heading, increased gap */}
            <FaMoneyBillWave className="text-yellow-500 text-5xl" /> Donation Options
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-10"> {/* Improved line-height, more margin-bottom */}
            Choose the method that works best for you. Your support directly funds school fees, food, learning materials, and mentorship programs for students in Malawi.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10"> {/* Increased gap, added lg column layout */}

            {/* Mobile Money Card (spans 2 columns on large screens) */}
            <div className="bg-blue-50 p-7 rounded-xl shadow-lg border border-blue-100 lg:col-span-2">
              <h3 className="text-3xl font-bold text-blue-800 mb-6">Mobile Money (Malawi)</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This is a very convenient way to donate in Malawi, especially for local contributions.
              </p>
              <ul className="list-none pl-0 text-gray-800 space-y-6 mb-4">
                {/* TNM Mpamba Section */}
                <li className="p-5 bg-white rounded-lg border border-gray-200 shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                  <Image
                    src="/images/tnm-logo.svg"
                    alt="TNM Mpamba Logo"
                    width={60}
                    height={60}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-xl text-blue-900 mb-2">TNM Mpamba:</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      <span className="font-mono bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm inline-block my-1 font-semibold">Dial *444#</span> &rarr; <span className="font-semibold">Option 3 (Payments)</span> &rarr; <span className="font-semibold">Option 1 (Make Payment)</span> &rarr; <span className="font-semibold">Option 1 (By Code)</span> &rarr; Enter Code: <strong className="text-red-600">MASSU</strong>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      *Confirm Account Name: Malawi Student Support Union (MASSU)
                    </p>
                  </div>
                </li>

                {/* Airtel Money Section */}
                <li className="p-5 bg-white rounded-lg border border-gray-200 shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                  <Image
                    src="/images/Airtel-Money.png"
                    alt="Airtel Money Logo"
                    width={60}
                    height={60}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-xl text-blue-900 mb-2">Airtel Money:</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      <span className="font-mono bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm inline-block my-1 font-semibold">Dial *211#</span> &rarr; <span className="font-semibold">Option 4 (Make Payments)</span> &rarr; <span className="font-semibold">Option 1 (Pay Bill)</span> &rarr; <span className="font-semibold">Option 1 (Select Company)</span> &rarr; Select <strong className="text-red-600">MASSU</strong> (or enter code if prompted)
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      *Confirm Account Name: Malawi Student Support Union (MASSU)
                    </p>
                  </div>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-6 leading-relaxed">
                After donating, consider sending a confirmation message (e.g., to our WhatsApp number) with the amount for our records and a receipt, if desired.
              </p>
            </div>

            {/* NBS Bank Transfer Card */}
            <div className="bg-white p-7 rounded-xl shadow-lg border border-blue-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
              <Image
                src="/images/NBS-logo.jpeg" // Path to your NBS logo
                alt="NBS Bank Logo"
                width={80} // Adjust size for bank logos if needed
                height={80}
                className="mb-5 object-contain"
              />
              <h3 className="text-3xl font-bold text-blue-800 mb-4">NBS Bank</h3>
              <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                Easily transfer funds to our account at NBS Bank.
              </p>
              <ul className="list-disc pl-7 text-gray-800 space-y-3 mb-6 text-base text-left w-full"> {/* Aligned left */}
                <li><strong>Account Name:</strong> Malawi Student Support Union</li>
                <li><strong>Account Number:</strong> <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">[YOUR NBS ACCOUNT NUMBER HERE]</span></li>
                <li><strong>Branch:</strong> [Your NBS Branch]</li>
                <li><strong>Swift Code:</strong> [NBS SWIFT CODE HERE]</li>
              </ul>
              <p className="text-sm text-gray-600 leading-relaxed mt-auto"> {/* Pushed to bottom */}
                Ensure correct details for smooth processing.
              </p>
            </div>

            {/* National Bank of Malawi Card */}
            <div className="bg-white p-7 rounded-xl shadow-lg border border-blue-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
              <Image
                src="/images/Nb-logo.png" // Path to your National Bank logo
                alt="National Bank of Malawi Logo"
                width={80} // Adjust size for bank logos if needed
                height={80}
                className="mb-5 object-contain"
              />
              <h3 className="text-3xl font-bold text-blue-800 mb-4">National Bank of Malawi</h3>
              <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                Support us via direct bank transfer to our National Bank account.
              </p>
              <ul className="list-disc pl-7 text-gray-800 space-y-3 mb-6 text-base text-left w-full"> {/* Aligned left */}
                <li><strong>Account Name:</strong> Malawi Student Support Union</li>
                <li><strong>Account Number:</strong> <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">[YOUR NATIONAL BANK ACCOUNT NUMBER HERE]</span></li>
                <li><strong>Branch:</strong> [Your National Bank Branch]</li>
                <li><strong>Swift Code:</strong> [NATIONAL BANK SWIFT CODE HERE]</li>
              </ul>
              <p className="text-sm text-gray-600 leading-relaxed mt-auto"> {/* Pushed to bottom */}
                For international transfers, please use the Swift Code provided.
              </p>
            </div>

            {/* In-Kind Donations Card (spans all 3 columns on large screens) */}
            <div className="bg-white p-7 rounded-xl shadow-lg border border-blue-100 lg:col-span-3">
              <h3 className="text-3xl font-bold text-blue-800 mb-6">In-Kind Donations</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We also warmly welcome donations of physical items that directly benefit our students and operations. This includes:
              </p>
              <ul className="list-disc pl-7 text-gray-800 space-y-3 mb-6 text-base">
                <li>School books and educational materials</li>
                <li>Laptops, tablets, and other learning devices</li>
                <li>Non-perishable food items for student welfare</li>
                <li>School uniforms, bags, and stationery</li>
                <li>Sanitary pads for female students</li>
                <li>Office supplies and equipment for our administrative needs</li>
              </ul>
              <p className="text-sm text-gray-600 leading-relaxed">
                To arrange drop-off, collection, or discuss specific in-kind contributions, please{" "}
                <Link href="/contact" className="text-blue-700 hover:text-blue-900 underline font-medium transition-colors duration-200">contact us directly</Link>.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              For any donation inquiries, or to request an official receipt for your contribution, please don't hesitate to reach out. Your support is deeply appreciated.
            </p>
            <Link
              href="/contact"
              className="inline-block text-xl font-semibold bg-blue-700 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Contact Us for Assistance →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}