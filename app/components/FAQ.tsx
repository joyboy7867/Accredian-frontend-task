import React from 'react';

const FAQ = () => {
    return <div>
        <section className="bg-[#1D1D1D] text-gray-100 py-32 min-h-screen">
  <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
    <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline"> How does the referral program work?</summary>
        <div className="px-4 pb-4">
          <p>Our referral program allows you to earn rewards by inviting friends to join Accredian. Simply share your unique referral link or code with your network. When someone signs up or makes a purchase using your referral, you earn rewards such as discounts, cash bonuses, or other incentives.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">How do I participate in the referral program?</summary>
        <div className="px-4 pb-4">
          <p>Participation is easy! Sign up for an account on Accredian. Once registered, youll receive a unique referral link or code. Share this link or code with your friends, family, or followers via social media, email, or word of mouth.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">How are referral rewards calculated?</summary>
        <div className="px-4 pb-4">
          <p>Referral rewards vary depending on the specific offer associated with each referral campaign. Typically, rewards are based on the action your referral takes (e.g., signing up, making a purchase) and may include discounts, gift cards, or cash bonuses.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">When do I receive my referral rewards?</summary>
        <div className="px-4 pb-4">
          <p>Youll receive your referral rewards after the referred person completes the specified action, such as signing up or making a purchase. Rewards are typically processed within 30 days, and you can track your referrals and rewards in your account dashboard.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline"> Is there a limit to how many referrals I can make??</summary>
        <div className="px-4 pb-4">
          <p>There is generally no limit to the number of referrals you can make on Accredian. The more referrals you make, the more rewards you can earn! However, specific campaigns or promotions may have their own limits or conditions, which will be clearly stated in the referral program details.</p>
        </div>
      </details>
     
     
    </div>
  </div>
</section>
    </div>;
}



export default FAQ;