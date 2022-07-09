import React from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Heading from "./../../components/shared/Heading";
import { globalStyles } from "./../../constants/GlobalStyles";

import CustomButton, { BackToHome } from "./../../components/shared/Button";
import Color from "../../constants/Color";
import { useRoute } from "@react-navigation/native";

const TermsAndServices = (props) => {
  const { params } = useRoute();

  return (
    <ScrollView contentContainerStyle={{ ...globalStyles.scrollView }}>
      <View style={{ ...globalStyles.container, ...styles.container }}>
        {/* <View style={{ ...styles.first, ...globalStyles.border }}>
          <Heading
            style={{
              color: "white",
              fontSize: 24,
              width: "100%",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Terms And Services
          </Heading>
          <Heading
            style={{
              color: "white",
              fontSize: 14,
              marginTop: 15,
              marginBottom: 15,
            }}
          >
            Last Updated: November 21,2021
          </Heading>
          <Text
            style={{
              ...globalStyles.text,
              marginBottom: 15,
            }}
          >
            This Terms And Services describes Our policies and procedures on the
            collection , use and disclosure of Your information w hen You use
            the Service and tells You abou t Your privacy rights and how the law
            protects You.
          </Text>
          <Text style={{ ...globalStyles.text }}>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information i n accordance with this Privacy Policy.
          </Text>
        </View> */}


        <View style={{ ...styles.first, ...globalStyles.border }}>
          <Heading
            style={{
              color: "white",
              fontSize: 24,
              width: "100%",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Terms And Services
          </Heading>
          <Heading
            style={{
              color: "white",
              fontSize: 14,
              marginTop: 15,
              marginBottom: 15,
            }}
          >
            1. The Terms
          </Heading>
          <Text
            style={{
              ...globalStyles.text,
              marginBottom: 15,
            }}
          >
            1.1. These Terms and Conditions is a legally binding document and is an electronic record in
            the form of an electronic contract formed under Information Technology Act, 2000 and rules
            made thereunder. These Terms and Conditions must be read in conjunction with the Terms of
            Use of the App (hereinafter referred to as “Terms of Use”) and the Privacy Policy of the App
            (hereinafter referred to as “Privacy Policy”).These Terms of Service (the “Terms”) are a legal
            and binding agreement between users (“Users”) and www.quartsworld.com (referred to as
            the “QUARTS MOBILE”), in relation to all games and applications made available by QUARTS
            MOBILE (jointly and interchangeably referred to as the “Services”), and any information, text,
            graphics, video, sound, pictures, and any other materials appearing, sent, uploaded,
            communicated, transmitted or otherwise made available via the abovementioned Services
            (jointly referred to as the “Content”).
          </Text>
          <Text style={{
            ...globalStyles.text,
            marginBottom: 15,
          }}>
            1.2. By accessing and/or using the Services, Users agree to be bound by these Terms and
            QUARTS MOBILE Privacy Policy, as stated on paragraph 5.
          </Text>
          <Text style={{
            ...globalStyles.text,
            marginBottom: 15,
          }} >
            1.3. Users state that they are of legal age (minimum 18 years of age) to access the Services
            and Content, or if legally possible, to access with their legal guardian consent, due
            authorization and agreement with these Terms.
          </Text>
          <Text style={{
            ...globalStyles.text,
            marginBottom: 15,
          }} >
            1.4. IMPORTANT NOTICE: {'\n'}{'\n'}
            <Text>{'\u2022'}</Text> THE CONTEST FOR QUIZ IS OPEN ONLY TO INDIAN CITIZENS, RESIDING IN INDIA.{'\n'}
            <Text>{'\u2022'}</Text> CITIZENS AND/OR RESIDENTS OF COUNTRIES OTHER THAN INDIA ARE NOT ELIGIBLE
            TO PARTICIPATE IN THE CONTEST.{'\n'}
            <Text>{'\u2022'}</Text> IF YOU ARE MORE THEN 25 YEARS OLD AND ACCESSING THE APP, THEN YOU ARE
            PROHIBITED FROM REGISTERING AND PARTICIPATING IN THE SAID CONTEST.{'\n'}
            COUNTRY/DOMICILE/STATE/RESIDENCE. IN CASE YOU PARTICIPATE IN THE CONTEST
            BY MISREPRESENTATION, THEN QUARTS MOBILE SHALL IN ITS SOLE DISCRETION
            HAVE THE RIGHT TO DISQUALIFY YOU AT ANY STAGE OF THE PROCESS, FORFEIT ANY
            PRIZE (AS DEFINED BELOW) AND TAKE LEGAL ACTION AGAINST YOU.
            <Text>{'\u2022'}</Text> IF YOU ARE FOUND OR SUSPECTED TO BE DEFRAUDING THE SYSTEMS OF THE
            CONTEST IN ANY MANNER THEN YOU SHALL BE DEBARRED FROM PARTICIPATING IN
            THE CONTEST AND QUARTS MOBILE MAY TAKE LEGAL ACTION AGAINST YOU.{'\n'}
            <Text>{'\u2022'}</Text> EMPLOYEES OF QUARTS MOBILE, ITS RESPECTIVE HOLDING, SUBSIDIARIES,
            ASSOCIATE COMPANIES AND THIRD-PARTY SERVICE PROVIDERS WHO HAVE BEEN
            ENGAGED BY QUARTS MOBILE FOR THE DEVELOPMENT, PROMOTION,
            ADMINISTRATION OR EXECUTION OF THE CONTEST, AND THEIR FAMILY/HOUSEHOLD
            MEMBERS ARE NOT ELIGIBLE TO PARTICIPATE IN THE CONTEST.{'\n'}

            <Text>{'\u2022'}</Text> IN CASE OF ANY DISPUTE REGARDING THE APP OR THE CONTEST, QUARTS MOBILE
            DECISION SHALL BE FINAL AND BINDING.{'\n'}
            <Text>{'\u2022'}</Text> QUARTS MOBILE RESERVES THE RIGHT TO CHANGE OR MODIFY THIS TERMS AND
            CONDITIONS FROM TIME TO TIME, PROSPECTIVELY OR RETROSPECTIVELY, AT ITS
            SOLE DISCRETION AND WITHOUT ANY PRIOR INTIMATION TO YOU. YOU ARE
            REQUESTED TO CAREFULLY READ THESE TERMS AND CONDITIONS FROM TIME TO
            TIME BEFORE USING THE APP OR PARTICIPATING IN CONTEST. IT SHALL BE YOUR
            RESPONSIBILITY TO CHECK THESE TERMS AND CONDITIONS PERIODICALLY FOR
            CHANGES. QUARTS MOBILE MAY REQUIRE YOU TO PROVIDE YOUR DIRECT OR
            INDIRECT CONSENT TO ANY UPDATE IN A SPECIFIED MANNER BEFORE FURTHER USE
            OF APP OR PARTICIPATION IN THE CONTEST. IF NO SUCH SEPARATE CONSENT IS
            SOUGHT, YOUR CONTINUED USE OF APP OR PARTICIPATION IN THE CONTEST,
            FOLLOWING SUCH CHANGES, WILL CONSTITUTE YOUR ACCEPTANCE OF THOSE
            CHANGES.{'\n'}
            <Text>{'\u2022'}</Text> QUARTS MOBILE RESERVES THE RIGHT TO WITHDRAW OR DISCONTINUE OR
            TERMINATE THE CONTEST AT ANY STAGE WITHOUT PRIOR NOTICE AND WITHOUT ANY
            LIABILITY WHATSOEVER TO YOU.{'\n'}
            <Text>{'\u2022'}</Text> THE CONTEST IS VOID WHERE PROHIBITED BY LAW.{'\n'}
            <Text>{'\u2022'}</Text> IN ANY CONTEST, INCASE OF A DRAW/TIE, THE FINAL DECISION WOULD BE OF THE
            COMPANY. THERE WOULD BE NO REFUNDS IN ANY SITUATION.{'\n'}
          </Text>

        </View>


        <View style={{ ...styles.first, ...globalStyles.border }}>

          <Heading
            style={{
              color: "white",
              fontSize: 14,
              marginTop: 15,
              marginBottom: 15,
            }}
          >
            2. The Services
          </Heading>
          <Text
            style={{
              ...globalStyles.text,
              marginBottom: 15,
            }}
          >
            2.1. QUARTS MOBILE gives Users in compliance with these Terms a personal, royalty-free,
            non-assignable, non-exclusive and revocable limited license to use the software that is
            provided as part of the Services. This license is for the sole purpose of enabling the own
            personal private use from Users to enjoy the Services as provided by QUARTS MOBILE, in the
            manner according with by these Terms. The Services may change or being modified from
            time to time without prior notice or communication. Furthermore, QUARTS MOBILE may, at
            its own discretion, cease totally or partially, and/or permanently or temporarily the provision
            of the Services or Users accounts without prior notice or communication.
          </Text>
          <Text style={{
            ...globalStyles.text,
            marginBottom: 15,
          }}>
            2.2. The Services may include advertisements, which may be targeted to the Content or
            information on the Services, queries made through the Services, or any other information.
            The types and extent of advertising by QUARTS MOBILE on the Services are subject to change.
            In consideration for QUARTS MOBILE granting you access to and use of the Services, you
            agree that QUARTS MOBILE and its third-party providers and partners may place such
            advertising on the Services or in connection with the display of Content or information from
            the Services whether submitted by you or others.
          </Text>
          <Text style={{
            ...globalStyles.text,
            marginBottom: 15,
          }} >
            2.3. When access quiz games included in the Services, the specific rules, scoring, controls and
            guidelines for each quiz game can be found within the quiz game itself. Such rules are integral
            part of the Terms, which Users shall agree and comply. {'\n'}{'\n'}

            2.4. Any charges related to Users for accessing the Services, including but not limited to
            internet connection and/or mobile or data charges are full responsibility of such Users.
          </Text>


        </View>


        <View style={{ ...styles.first, ...globalStyles.border }}>

          <Heading
            style={{
              color: "white",
              fontSize: 14,
              marginTop: 15,
              marginBottom: 15,
            }}
          >
            3. Content
          </Heading>
          <Text
            style={{
              ...globalStyles.text,
              marginBottom: 15,
            }}
          >
            3.1. Subject to your compliance with these Terms, QUARTS MOBILE grants you a limited, non-
            exclusive, non-transferable, non-sublicensable license to access and view the Content solely
            in connection with your permitted use of the Services and solely for your personal and non-
            commercial purposes.
          </Text>
          <Text style={{
            ...globalStyles.text,
            marginBottom: 15,
          }}>
            The Content available through the Services has not been verified or authenticated by us, and
            may include inaccuracies or false information. We make no representations, warranties, or
            guarantees in connection with our Services or any Content on the Services, relating to the
            quality, suitability, truth, accuracy or completeness of any content contained in the Services.
            You acknowledge sole responsibility for and assume all risk arising from your use or reliance
            of any Content.
          </Text>


        </View>


        <View style={{ ...styles.first, ...globalStyles.border }}>

          <Heading
            style={{
              color: "white",
              fontSize: 14,
              marginTop: 15,
              marginBottom: 15,
            }}
          >
            4. Users accounts
          </Heading>
          <Text
            style={{
              ...globalStyles.text,
              marginBottom: 15,
            }}
          >
            4.1. Users are responsible for safeguarding the password that use to access the Services.
            QUARTS MOBILE encourage Users to use strong passwords (passwords that use a
            combination of upper- and lower-case letters, numbers and symbols) with the accounts.
            QUARTS MOBILE cannot and will not be liable for any loss or damage arising from Users
            failure to comply with the above.
          </Text>
          <Text style={{
            ...globalStyles.text,
            marginBottom: 15,
          }}>
            4.2. Users agree to take all steps necessary to protect log in details and keep them secret, and
            not give login details to anyone else or allow anyone else to use their login details or account,
            including log in details and account for any social network or platform that Users may allow
            the Services to interact with. QUARTS MOBILE shall not have any responsibility for the
            consequences of failure by Users to these provisions, and agree to fully compensate QUARTS
            MOBILE for any losses or harm that may result. Furthermore, QUARTS MOBILE shall not be
            responsible for any loss that Users may suffer as a result of an unauthorized access to their
            accounts and/or use of the Services, and QUARTS MOBILE accepts no responsibility for any
            losses or harm resulting from this unauthorized use, whether fraudulently or otherwise.
          </Text>


        </View>


        <View style={{ ...styles.first, ...globalStyles.border }}>

          <Heading
            style={{
              color: "white",
              fontSize: 14,
              marginTop: 15,
              marginBottom: 15,
            }}
          >
            5. Contests, Deals, Levels and In App purchases
          </Heading>
          <Text
            style={{
              ...globalStyles.text,
              marginBottom: 15,
            }}
          >
            QUARTS MOBILE may conduct promotions, including, without limitation, contests,
            consolation prizes, Level redemptions. QUARTS MOBILE is not involved in any way with the
            contest. Each promotion may have additional Terms and rules, which will be posted or
            otherwise made available to you, and for purposes of each Promotion, will be deemed
            incorporated into and form a part of this agreement.
          </Text>
          <Text style={{
            ...globalStyles.text,
            marginBottom: 15,
          }}>
            5.1. Pricing of, Purchasing and Availability of Levels. QUARTS MOBILE rewards its users certain
            Levels as per the company’s discretion and a proprietary algorithm that factors in multiple
            variables viz. number of quizzes played, number of quizzes correctly answered, etc. QUARTS
            MOBILE Levels has no monetary value and does not constitute currency or property of any
            type. The number of Levels earned and shown in your Account does not constitute a real-
            world balance or reflect any stored value, but rather measures the extent of your limited
            license to use the Applications alongside exercising few options such as redemption of Levels
            for certain prizes, ability to participate in certain games upon reaching a minimum Level
            requirement. QUARTS MOBILE ´s Levels cannot be sold or transferred; however, it can be
            redeemed for certain special deals by making a nominal payment, if applicable, against those
            deals. QUARTS MOBILE reserves the right to withdraw the deal anytime during the tenure of
            the services without prior intimation. You acknowledge that you are not entitled to a refund
            for any unused Levels or unused Virtual Items when QUARTS MOBILE stops making an
            application available, whether such action is taken at QUARTS MOBILE´s discretion or due to
            unforeseen events. {'\n'}{'\n'}

            5.2. The price payable by you is the price, if applicable, indicated in the Application itself.
            When you purchase a license to use our Services, or purchase a subscription to use an
            application, you agree to pay taxes, levies and any other Statutory/Govt. dues by whatever
            name called, where applicable, that we or our agent assesses on your purchase. We reserve
            the right to change the price and specifications shown in relation to any Application, any
            subscription, Levels, deals and Items etc. We do not offer any returns or cancellations of
            purchases unless the user satisfies any minimum performance criteria that’s decided by
            QUARTS MOBILE and mentioned on the App. {'\n'}{'\n'}


            5.3. As for any competition or deal that’s placed in the Application, QUARTS MOBILE
            reserves complete rights for the following – {'\n'}
            <Text>{'\u2022'}</Text> Decision pertaining to competition format and content {'\n'}
            <Text>{'\u2022'}</Text> Decision pertaining to the pricing structure viz. Main prize, Consolation prize {'\n'}
            <Text>{'\u2022'}</Text> Decision pertaining to criteria of selection of winners {'\n'}
            <Text>{'\u2022'}</Text> Decision pertaining to disbursal of prizes, gifts and deal redemptions {'\n'} {'\n'}

            QUARTS MOBILE holds no liabilities against any form of aberration w.r.t. quality of the
            product, logistics &amp; handling procedures, any other unforeseen cost or unfavorable
            constraint that surfaces during the process of user claiming its prizes.{'\n'}{'\n'}

            5.4. Usage of QUARTS MOBILE {'\n'}
            <Text>{'\u2022'}</Text> Any person (&quot;User&quot;) accessing QUARTS MOBILE or the QUARTS MOBILE App (QUARTS
            MOBILE platform&#39;) for participating in the various contests and games, available on
            QUARTS MOBILE platform (&quot;Contest(s)&quot;, “Tournament&quot;) (QUARTS MOBILE Services&#39;)
            shall be bound by these Terms and Conditions, and all other rules, regulations and

            terms of use referred to herein or provided by QUARTS MOBILE in relation to any
            QUARTS MOBILE Services. {'\n'}

            <Text>{'\u2022'}</Text> QUARTS MOBILE shall be entitled to modify these Terms and Conditions, rules,
            regulations and terms of use referred to herein or provided by QUARTS MOBILE in
            relation to any QUARTS MOBILE Services, at any time, by posting the same on QUARTS
            MOBILE. Use of QUARTS MOBILE constitutes the User&#39;s acceptance of such Terms and
            Conditions, rules, regulations and terms of use referred to herein or provided by
            QUARTS MOBILE in relation to any QUARTS MOBILE Services, as may be amended
            from time to time. QUARTS MOBILE may, at its sole discretion, also notify the User of
            any change or modification in these Terms and Conditions, rules, regulations and
            terms of use referred to herein or provided by QUARTS MOBILE, by way of sending an
            email to the User&#39;s registered email address or posting notifications in the User
            accounts. The User may then exercise the options provided in such an email or
            notification to indicate non-acceptance of the modified Terms and Conditions, rules,
            regulations and terms of use referred to herein or provided by QUARTS MOBILE. If such
            options are not exercised by the User within the time frame prescribed in the email or
            notification, the User will be deemed to have accepted the modified Terms and
            Conditions, rules, regulations and terms of use referred to herein or provided by
            QUARTS MOBILE.{'\n'}
            <Text>{'\u2022'}</Text> Certain QUARTS MOBILE Services being provided on QUARTS MOBILE may be subject
            to additional rules and regulations set down in that respect. To the extent that these
            Terms and Conditions are inconsistent with the additional conditions set down, the
            additional conditions shall prevail.{'\n'}{'\n'}
            <Text>{'\u2022'}</Text> QUARTS MOBILE may, at its sole and absolute discretion: {'\n'}{'\n'}

            5.5. Third Party Sites, Services and Products{'\n'}{'\n'}
            <Text>{'\u2022'}</Text> QUARTS MOBILE may contain links to other Internet sites owned and operated by
            third parties. Users&#39; use of each of those sites is subject to the conditions, if any,
            posted by the sites. QUARTS MOBILE does not exercise control over any Internet sites
            apart from QUARTS MOBILE and cannot be held responsible for any content residing
            in any third-party Internet site. QUARTS MOBILE &#39;s inclusion of third-party content or
            links to third-party Internet sites is not an endorsement by QUARTS MOBILE of such
            third-party Internet site.{'\n'}
            <Text>{'\u2022'}</Text> Users&#39; correspondence, transactions/offers or related activities with third parties,
            including payment providers and verification service providers, are solely between the
            User and that third party. Users&#39; correspondence, transactions and usage of the
            services/offers of such third party shall be subject to the terms and conditions, policies
            and other service terms adopted/implemented by such third party, and the User shall
            be solely responsible for reviewing the same prior to transacting or availing of the
            services/offers of such third party. User agrees that QUARTS MOBILE will not be
            responsible or liable for any loss or damage of any sort incurred as a result of any such
            transactions/offers with third parties. Any questions, complaints, or claims related to
            any third-party product or service should be directed to the appropriate vendor.{'\n'}
            <Text>{'\u2022'}</Text> QUARTS MOBILE contains content that is created by QUARTS MOBILE as well as
            content provided by third parties. QUARTS MOBILE does not guarantee the accuracy,
            integrity, quality of the content provided by third parties and such content may not
            relied upon by the Users in utilizing the QUARTS MOBILE Services provided on QUARTS
            MOBILE including while participating in any of the contests hosted on QUARTS
            MOBILE.{'\n'}
            <Text>{'\u2022'}</Text> QUARTS MOBILE has certain links embedded to third party services including but not
            limited to YouTube. Your interaction with such third party platform/s are governed by
            their policies, and we urge you to review their policies before you proceed with
            availing such services via the offerings of QUARTS MOBILE. The YouTube terms are
            available at https://www.youtube.com/t/terms; and the Google Privacy Policy is
            available at https://policies.google.com/privacy?hl=en-US. Also, to control your
            interaction with Google account or their services allows you to control your rights and
            activities, and may be accessed at https://myaccount.google.com/permissions?pli=1.{'\n'}{'\n'}

            6. Privacy Policy{'\n'}{'\n'}
            6.1. Any information that Users provide to QUARTS MOBILE is subject to the Privacy Policy,
            which governs the collection and use of the information. Users understand that through their
            use of the Services, they consent to the collection, use, and transfer of such information, as
            set forth in the Privacy Policy, which forms an integral part of these Terms.{'\n'}
            6.2. QUARTS MOBILE will only collect, process, use and share User’s information in
            accordance with the Privacy Policy and as set out in these Terms. By using the Services, Users
            give their consent to collecting, processing, using and sharing with third parties their
            personal data in such way. Users who do not agree to Privacy Policy should not access and/or
            use the Services. Any personal information that may be collected may also be subject to the
            policy of any social network that Users may linked the Services to.{'\n'}
            6.3. Users acknowledge and accept that they are subject to receive occasional
            communications, such as service announcements and administrative messages.{'\n'}{'\n'}

            7. Intellectual Property{'\n'}{'\n'}

            7.1. Users acknowledge that all copyright, trademarks, and other intellectual property rights
            in and relating to the Services, is owned by or licensed to QUARTS MOBILE. By submitting
            Content on or through the Services, Users grant QUARTS MOBILE a worldwide, non-exclusive,
            royalty-free license -with the right to sublicense- to use, copy, reproduce, process, adapt,
            modify, publish, transmit, display, distribute and make derivative works of such Content in
            any and all media or distribution methods now known or later developed.{'\n'}
            7.2. Users must not copy, distribute, make available to the public or create any derivative
            work from any Content belonging to QUARTS MOBILE and/or any other User. QUARTS MOBILE
            respects the intellectual property rights of others and expects Users to do the same. If Users
            or any third party believe that their Content has been copied in a way that constitutes
            copyright infringement, they shall provide QUARTS MOBILE with the following information: (i)
            a physical or electronic signature of the copyright owner or a person authorized to act on
            their behalf; (ii) identification of the copyrighted work claimed to have been infringed; (iii)
            identification of the material that is claimed to be infringing or to be the subject of infringing
            activity and that is to be removed or access to which is to be disabled, and information
            reasonably sufficient to permit the location of the material; (iv) contact information,

            including address, telephone number, and an email address; (v) a statement that such User or
            third party have a good faith belief that use of the material in the manner complained of is
            not authorized by the copyright owner, its agent, or the law; and (vi) a statement that the
            information in the notification is accurate, and, under penalty of perjury, that such User or
            third party is authorized to act on behalf of the copyright owner.{'\n'}
            7.3. QUARTS MOBILE reserves the right to remove Content alleged to be infringing without
            prior notice, at its sole discretion, and without any liability.{'\n'}{'\n'}

            8. Breach{'\n'}{'\n'}
            8.1. QUARTS MOBILE reserves the right at all times to remove or refuse to include, distribute
            and/or display any Content on the Services, to suspend or terminate Users, and to reclaim
            usernames and/or any channel name without any liability. QUARTS MOBILE also reserves the
            right to access, read, preserve, and disclose any information as it reasonably believed is
            necessary to satisfy any applicable law, regulation, legal process or governmental request,
            enforce the Terms, including investigation of potential violations hereof, detect, prevent, or
            otherwise address fraud, security or technical issues, or to protect its rights, property or
            safety, its Users and third parties.{'\n'}
            8.2. Users shall not do any of the following while accessing or using the Services: access,
            tamper with, or use non-public areas of the Services, QUARTS MOBILE’s computer systems, or
            the technical delivery systems of QUARTS MOBILE’s providers; probe, scan, crack, track
            and/or test the vulnerability of any system or network, or breach or circumvent any security
            or authentication measures; access or search or attempt to access or search the Services by
            any means (automated or otherwise) other than through the currently available, published
            interfaces provided and only pursuant to these Terms, forge any TCP/IP packet header or any
            part of the header information in any email or posting, or in any way use the Services to send
            altered, deceptive or false source-identifying information; or interfere with, or disrupt, (or
            attempt to do so), the access of any user, host or network, including, without limitation,
            sending a virus, overloading, flooding, spamming, mail-bombing the Services, or by scripting
            the creation of Content in such a manner as to interfere with or create an undue burden on
            the Services. Users shall provide accurate and up to date information when creating their
            accounts and/or using the Services. Accounts are limited at one per User. The sell or transfer
            of any account or part of it, Content, items and/or any part of the Services is strictly
            prohibited.{'\n'}
            8.3. QUARTS MOBILE reserves the right to suspend or terminate any access to the Services,
            including by terminating or deleting any accounts and any Content related without any
            notice or communication, if there is a reasonably belief that such User is in breach of these
            Terms. In the event of any breach, Users who caused shall compensate QUARTS MOBILE for
            all losses, harm, claims and expenses that may arise.{'\n'}{'\n'}

            9. Disclaimers{'\n'}{'\n'}
            9.1. All right, title, and interest in and to the Services, according to the provisions set on these
            Terms, are and will remain the exclusive property of QUARTS MOBILE and its licensors.
            Services are protected by copyright, trademark, and other laws. Nothing in the Terms gives
            Users any right to use the QUARTS MOBILE name or any of the QUARTS MOBILE trademarks,
            logos, domain names, properties and other distinctive brand features.{'\n'}
            9.2. These Terms will continue to apply until terminated by either Users or QUARTS MOBILE
            as follows: (i) Users may end this legal agreement with QUARTS MOBILE at any time for any
            reason, by discontinuing the use of the Services and contacting support@quartsworld.com to
            delete their account, provided that they will still be responsible for all the conditions set in
            this Term for the time they used the Services. Accounts may be deactivated and/or deleted
            due to prolonged inactivity; (ii) QUARTS MOBILE may suspend or terminate Users accounts or
            cease providing with all or part of the Services at any time for any reason, including, but not
            limited to, if there is a reasonably belief that such Users have violated these Terms or created
            a risk or possible legal exposure; or if at its own discretion the provision of the Services is no
            longer commercially and or technically viable.{'\n'}
            9.3. Each of the subsections below only applies up to the maximum extent permitted under
            applicable law. Nothing in this section is intended to limit any rights you may have which may
            not be lawfully limited.{'\n'}
            9.4. The access to and use of the Services or any Content are at Users’ own risk. Users
            understand and agree that the Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis.
            Without limiting the foregoing, to the maximum extent permitted under applicable law,
            QUARTS MOBILE disclaims all warranties and conditions, whether express or implied, of
            merchantability, fitness for a particular purpose or non-infringement.{'\n'}
            9.5. QUARTS MOBILE makes no warranty and disclaim all responsibility and liability for: (i) the
            completeness, accuracy, availability, timeliness, security or reliability of the Services or any
            Content; (ii) any harm to Users’ computer system or mobile device operating system, loss of
            data, or other harm that results from access to or use of the Services or any Content; (iii) the
            deletion of, or the failure to store or to transmit, any Content and other communications
            maintained by the Services; and (iv) whether the Services will meet Users requirements or be
            available on an uninterrupted, secure, or error-free basis. No advice or information, whether
            oral or written, obtained from QUARTS MOBILE or through the Services, will create any
            warranty not expressly made herein.{'\n'}
            9.6. The Services may contain links to third-party websites or resources. Users acknowledge
            and agree that QUARTS MOBILE is not responsible or liable for: (i) the availability or accuracy
            of such websites or resources; or (ii) the content, products, or services on or available from
            such websites or resources. Links to such websites or resources do not imply any

            endorsement by QUARTS MOBILE of such websites or resources or the content, products, or
            services available from such websites or resources. Users acknowledge sole responsibility for
            and assume all risk arising from its use of any such websites or resources.{'\n'}
            9.7. To the maximum extent permitted by applicable law, QUARTS MOBILE shall not be liable
            for any indirect, incidental, special, consequential or punitive damages, or any loss of profits
            or revenues, whether incurred directly or indirectly or any loss of data, use, good-will, or
            other intangible losses, resulting from (i) the access to, use of, or inability to access to or use
            the services; (ii) any conduct or content of any third party on the Services, including without
            limitation, any defamatory, offensive or illegal conduct of other Users or third parties; (iii) any
            Content obtained from the Services; or (iv) unauthorized access, use or alteration of Content;
            or (v) any natural calamities.{'\n'}
            9.8. In no event shall the aggregate liability of QUARTS MOBILE exceed the total amount that
            such User has paid to QUARTS MOBILE in the six-month period ending on the date of the
            claim, to a maximum of One Thousand Indian Rupees (INR 1000). The limitations shall apply
            to any theory of liability whether based on warranty, contract, statute, tort (including
            negligence) or otherwise, and whether or not QUARTS MOBILE has been informed the
            possibility of any such damage, and even if a remedy set forth herein is found to have failed
            its essential purpose.{'\n'}
            9.9. The failure of QUARTS MOBILE to enforce any right or provision of these Terms will not be
            deemed a waiver of such right or provision. In the event that any provision of these Terms is
            held to be invalid or unenforceable, then that provision will be limited or eliminated to the
            minimum extent necessary, and the remaining provisions of these Terms will remain in full
            force and effect.{'\n'}
            9.10. These terms shall be governed by and construed in accordance with the laws of Indian
            Government. All claims, legal proceedings or litigation arising in connection with the Services
            will be brought solely in the relevant courts located in the city of Delhi/New Delhi – INDIA.
            Users consent to the jurisdiction of and venue in such courts and waive any objection as to
            inconvenient forum.{'\n'}
            9.11. QUARTS MOBILE is a skill-based Gaming Platform i.e... skill game which is clearly
            defined in the recently passed by an Act of Government of Nagaland under The Nagaland
            Prohibition of Gambling and Promotion and Regulation of Online Games of Skill Act, 2015 (Act
            No.3 of 2016) and The Nagaland Prohibition of Gambling and Promotion and Regulation of
            Online Games of Skill Rules, 2016 in which Skill Game and allow to run/operate of this type of
            skill games.
            As per Section 2(3) of The Nagaland Prohibition of Gambling and Promotion and Regulation
            of Online Games of Skill Act, the definition of “Games of Skill” is reproduced as under,{'\n'}

            “Games of Skill” shall include all such games where there is preponderance of skill over chance,
            including where the skill relates to strategizing the manner of placing wagers or placing bets or
            where the skill lies in team selection or selection of virtual stocks based on analyses or where
            skill relates to the manner in which the moves are made, whether through deployment of
            physical or mental skill or acumen”.{'\n'}{'\n'}

            Explanation: For the purpose of this Act-{'\n'}{'\n'}
            <Text>{'\u2022'}</Text> - All Games provided in Schedule A of this Act shall fall under the category of “Games
            of Skill”,{'\n'}
            <Text>{'\u2022'}</Text> - ‘Games’ which have been declared or determined to be ‘games of skill’ by India or
            International courts or other statutes, or games where there are domestic and
            international competitions and tournaments, or games which can be determined to
            be ‘games of skill’ shall further be entitled to be included in Schedule A,{'\n'}
            <Text>{'\u2022'}</Text> -Games of skill may be (a) Card based and (b) action/virtual sports /adventure/
            mystery and (c) calculation/Strategy/quiz based.”{'\n'}{'\n'}

            Supreme Court of India in the case of State of Andhra Pradesh v. K Satyanarayana (AIR
            1968 SC 825) and KR Lakshmanan v. State of Tamil Nadu (AIR 1996 SC 1153) wherein the
            word Games of Skill has clearly been stated which is reproduced as under,{'\n'}
            “A game of skill, on the other hand- although the element of chance necessarily cannot be
            eliminated is one in which success depends principally upon the superior knowledge, training
            attention, experience and adroitness of the player. Golf, chess and even Rummy are considered
            to be games of skill. The Courts have reasoned that there are few games, if any, which consists
            purely of chance or skill, and as such games of chance is one in which the element of chance
            predominates over the element of skill, and a game of skill is one in which the element of skill
            predominates over the element of chance. It is dominant element – “skill” or “chance” – which
            determines the character of the game”.{'\n'}{'\n'}

            9.12. QUARTS MOBILE Skill Games, for stakes may be run all over India except the States of
            Assam, Orissa, Nagaland, Sikkim, Andhra Pradesh, Telangana and/or any other State which
            has banned/prohibited or to be prohibited to run/operate of QUARTS MOBILE Skill Games.
            QUARTS MOBILE Skill Games, being played for free without the involvement of money/ or any
            equivalent stakes may be run all over India. In spite of this, if any User run and/or operate the
            QUARTS MOBILE Skill Games, he will be solely responsible for the same.{'\n'}
            9.13. QUARTS MOBILE &#39;s skill-based games are not Gambling, Gaming and Lotteries.{'\n'}
            9.14. These Terms, which include the Privacy Policy, are the entire and exclusive agreement
            between QUARTS MOBILE and Users regarding the Services, excluding any services for which
            Users may have a separate agreement explicitly in addition or in place of these Terms, and

            these Terms supersede and replace any prior agreements between QUARTS MOBILE and
            Users regarding the Services.{'\n'}
            9.15. QUARTS MOBILE may revise these Terms from time to time, the most current version
            will always be on the mobile application. QUARTS MOBILE reserves the right, but not the
            obligation, in its sole discretion, to notify any modification via e-mail to the email associated
            with Users account. However, by merely continuing to access or use the Services after those
            revisions become effective, Users agree to be bound by the revised Terms. These Terms were
            last updated on 6th April, 2021.{'\n'}{'\n'}

            10. Tax &amp; TDS Policy{'\n'}{'\n'}
            10.1. Any tax/levies/duty etc., as applicable, shall be paid by the user of the game of QUARTS
            MOBILE Games.{'\n'}
            10.2. There is no TDS deducted as the winning amounts are up to or less than Rs.10,000/-
            on QUARTS MOBILE Games/Quiz.{'\n'}
            10.3. TDS is deducted on winning amounts above Rs.10,000/- on QUARTS MOBILE
            Games/Quiz before releasing the winnings prize/product/amount and/or in whatever name
            called.{'\n'}
            10.4. Based on TDS (tax deducted at source) Rules for any sort of game winning in India, 30%
            TDS should be deducted on any wining above Rs.10,000/- in a single game.{'\n'}
            10.5 The real money added by you on the QUARTS MOBILE Platform will be applied towards
            the rights provided to you, by the Company, to play any game/s. Such amount will be
            completely non- refundable and non-transferrable and can only and only be utilized towards
            the playing of games on QUARTS MOBILE Platform. The terms &amp; conditions of each game
            would be displayed, along with the fixed/ variable winnings amount which you may win on
            participation and successful completion of the terms of the game. Such amounts will be
            decided by the Company for each game separately. You would be eligible to withdraw only to
            the extent of your winnings (before that expires) and after submission of relevant
            documentation to the Company.{'\n'}
            10.6. The person responsible for paying shall, before releasing the winnings, collect the TDS
            amount from the winner.{'\n'}
            10.7. Your prize can only be redeemable after TDS deduction, if winning product is above
            10,000/-. TDS amount is to be paid to QUARTS MOBILE Games as provided by Section 194B
            read with Section 115BB of the Income Tax Act, 1961.{'\n'}

            10.8. The User will have to provide his valid PAN card copy so that QUARTS MOBILE
            Games can file TDS deducted accordingly.{'\n'}
            10.9. TDS has to be paid within 24 hours. Kindly give us time period of 15 working days to
            deliver your prize.{'\n'}
            10.10. To claim your winning product, if TDS as applicable by govt. (as per Section 194B read
            with Section 115BB of the Income Tax Act, 1961) on your winning, winner gets 24 hrs time to
            pay TDS from the time of winning to claim their prize. If user fails to pay TDS within 24 hrs
            his/her winning will be considered as expired.{'\n'}
            10.11. QUARTS MOBILE in the interests of clarity, performs an independent closing balance
            confirmation at the end of every year from its external wallet service providers ( PayTM, Cash
            Free, etc.). In the event that there exists discrepancy between the accounts of the external
            wallet service providers and QUARTS MOBILE, QUARTS MOBILE, in its sole discretion and
            authority, shall perform reasonable due diligence to ascertain the liability for the differences
            in the accounts.{'\n'}{'\n'}
            11. Questions Integrity{'\n'}{'\n'}

            11.1. QUARTS MOBILE attempts to keep the database of questions up to date and check that
            answers registered in the system as the &quot;right&quot; answers are correct. However, if there are
            questions that have answers that are incorrect according to some sources, then QUARTS
            MOBILE does not hold any responsibility for the outcome of the Challenge.{'\n'}{'\n'}
            11.2. User Conduct{'\n'}
            <Text>{'\u2022'}</Text> Users agree to abide by these Terms and Conditions and all other rules, regulations
            and terms of use of the Website. In the event User does not abide by these Terms and
            Conditions and all other rules, regulations and terms of use, QUARTS MOBILE may, at
            its sole and absolute discretion, take necessary remedial action, including but not
            limited to:{'\n'}{'\n'}
            o restricting, suspending, or terminating any User&#39;s access to all or any part of
            QUARTS MOBILE Services;{'\n'}
            o deactivating or deleting a user’s account and all related information and files
            on the account. Any amount remaining unused in the User&#39;s Game account or
            Winnings Account on the date of deactivation or deletion shall be transferred
            to the User&#39;s bank account on record with QUARTS MOBILE subject to a
            processing fee (if any) applicable on such transfers as set out herein; or{'\n'}
            o refraining from awarding any prize(s) to such User{'\n'}{'\n'}
            <Text>{'\u2022'}</Text> Users agree to provide true, accurate, current and complete information at the time of
            registration and at all other times (as required by QUARTS MOBILE). Users further
            agree to update and keep updated their registration information.{'\n'}

            <Text>{'\u2022'}</Text> A User shall not register or operate more than one User account with QUARTS MOBILE.{'\n'}
            <Text>{'\u2022'}</Text> Users agree to ensure that they can receive all communication from QUARTS MOBILE
            by marking e-mails or sending SMSs from QUARTS MOBILE as part of their &quot;safe
            senders&quot; list. QUARTS MOBILE shall not be held liable if any e-mail/SMS remains
            unread by a User as a result of such e-mail getting delivered to the User&#39;s junk or spam
            folder.{'\n'}
            <Text>{'\u2022'}</Text> Any password issued by QUARTS MOBILE to a User may not be revealed to anyone
            else. Users may not use anyone else&#39;s password. Users are responsible for maintaining
            the confidentiality of their accounts and passwords. Users agree to immediately notify
            QUARTS MOBILE of any unauthorized use of their passwords or accounts or any other
            breach of security.{'\n'}
            <Text>{'\u2022'}</Text> Users agree to exit/log-out of their accounts at the end of each session. QUARTS
            MOBILE shall not be responsible for any loss or damage that may result if the User fails
            to comply with these requirements.{'\n'}
            <Text>{'\u2022'}</Text> Users agree not to use cheats, exploits, automation, software, bots, hacks or any
            unauthorized third-party software designed to modify or interfere with QUARTS
            MOBILE Services and/or QUARTS MOBILE experience or assist in such activity.{'\n'}
            <Text>{'\u2022'}</Text> Users agree not to copy, modify, rent, lease, loan, sell, assign, distribute, reverse
            engineer, grant a security interest in, or otherwise transfer any right to the technology
            or software underlying QUARTS MOBILE or QUARTS MOBILE’s Services.{'\n'}
            <Text>{'\u2022'}</Text> Users agree that without QUARTS MOBILE &#39;s express written consent, they shall not
            modify or cause to be modified any files or software that are part of QUARTS MOBILE &#39;s
            Services.{'\n'}
            <Text>{'\u2022'}</Text> Users agree not to disrupt, overburden, or aid or assist in the disruption or
            overburdening of (a) any computer or server used to offer or support QUARTS MOBILE
            or the QUARTS MOBILE’s Services (each a &quot;Server&quot;); or (2) the enjoyment of QUARTS
            MOBILE Services by any other User or person.{'\n'}
            <Text>{'\u2022'}</Text> Users agree not to institute, assist or become involved in any type of attack, including
            without limitation to distribution of a virus, denial of service, or other attempts to
            disrupt QUARTS MOBILE Services or any other person&#39;s use or enjoyment of QUARTS
            MOBILE Services.{'\n'}
            <Text>{'\u2022'}</Text> Users shall not attempt to gain unauthorized access to the User accounts, Servers or
            networks connected to QUARTS MOBILE Services by any means other than the User
            interface provided by QUARTS MOBILE, including but not limited to, by circumventing
            or modifying, attempting to circumvent or modify, or encouraging or assisting any
            other person to circumvent or modify, any security, technology, device, or software
            that underlies or is part of QUARTS MOBILE Services.{'\n'}
            <Text>{'\u2022'}</Text> Without limiting the foregoing, Users agree not to use QUARTS MOBILE for any of the
            following.{'\n'}{'\n'}
            o To engage in any obscene, offensive, indecent, racial, communal, anti-national,
            objectionable, defamatory or abusive action or communication;{'\n'}

            o To harass, stalk, threaten, or otherwise violate any legal rights of other
            individuals;{'\n'}
            o To publish, post, upload, e-mail, distribute, or disseminate (collectively,
            &quot;Transmit&quot;) any inappropriate, profane, defamatory, infringing, obscene,
            indecent, or unlawful content;{'\n'}
            o To Transmit files that contain viruses, corrupted files, or any other similar
            software or programs that may damage or adversely affect the operation of
            another person&#39;s computer, QUARTS MOBILE, any software, hardware, or
            telecommunications equipment;{'\n'}
            o To advertise, offer or sell any goods or services for any commercial purpose on
            QUARTS MOBILE without the express written consent of QUARTS MOBILE;{'\n'}
            o To download any file, recompile or disassemble or otherwise affect our
            products that you know or reasonably should know cannot be legally obtained
            in such manner;{'\n'}
            o To falsify or delete any author attributions, legal or other proper notices or
            proprietary designations or labels of the origin or the source of software or
            other material;{'\n'}
            o To restrict or inhibit any other user from using and enjoying any public area
            within our sites;{'\n'}
            o To collect or store personal information about other Users;{'\n'}
            o To interfere with or disrupt QUARTS MOBILE, servers, or networks;{'\n'}
            o To impersonate any person or entity, including, but not limited to, a
            representative of QUARTS MOBILE, or falsely state or otherwise misrepresent
            User&#39;s affiliation with a person or entity;{'\n'}
            o To forge headers or manipulate identifiers or other data in order to disguise the
            origin of any content transmitted through QUARTS MOBILE or to manipulate
            User&#39;s presence on QUARTS MOBILE (s);{'\n'}
            o To publish information that threatens the unity, integrity, defence, security or
            sovereignty of India, friendly relations with foreign States, or public order, or
            causes incitement to the commission of any cognizable offence or prevents
            investigation of any offence or is insulting other nation;{'\n'}
            o To publish information that is an invasion of another’s privacy, their bodily
            privacy, insulting or harassing on the basis of gender, libellous, racially or
            ethnically objectionable, relating or encouraging money laundering or
            gambling, or otherwise inconsistent with or contrary to the laws in force;{'\n'}
            o To take any action that imposes an unreasonably or disproportionately large
            load on our infrastructure;{'\n'}
            o To engage in any illegal activities. You agree to use our bulletin board services,
            chat areas, news groups, forums, communities and/or message or
            communication facilities (collectively, the &quot;Forums&quot;) only to send and receive
            messages and material that are proper and related to that particular Forum.{'\n'}{'\n'}

            <Text>{'\u2022'}</Text> If a User chooses a username that, in QUARTS MOBILE &#39;s considered opinion is
            obscene, indecent, abusive or that might subject QUARTS MOBILE to public
            disparagement or scorn, QUARTS MOBILE reserves the right, without prior notice to
            the User, to change such username and intimate the User or delete such username
            and posts from QUARTS MOBILE, deny such User access to QUARTS MOBILE, or any
            combination of these options.{'\n'}
            <Text>{'\u2022'}</Text> Unauthorized access to QUARTS MOBILE is a breach of these Terms and Conditions,
            and a violation of the law. Users agree not to access QUARTS MOBILE by any means
            other than through the interface that is provided by QUARTS MOBILE for use in
            accessing QUARTS MOBILE. Users agree not to use any automated means, including,
            without limitation, agents, robots, scripts, or spiders, to access, monitor, or copy any
            part of our sites, except those automated means that we have approved in advance
            and in writing.{'\n'}
            <Text>{'\u2022'}</Text> Users acknowledge and accept that they are subject to receive occasional
            communications, in relation to their obligation to comply with the Terms and
            Conditions, rules and regulations, Privacy Policy or any other user document to access
            the Services and Platform offered by QUARTS MOBILE. In the event of non-
            compliance, QUARTS MOBILE reserves the right to terminate the User’s access or
            usage rights to the Services and Platform offered by QUARTS MOBILE.{'\n'}
            <Text>{'\u2022'}</Text> Use of QUARTS MOBILE is subject to existing laws and legal processes. Nothing
            contained in these Terms and Conditions shall limit QUARTS MOBILE &#39;s right to comply
            with governmental, court, and law-enforcement requests or requirements relating to
            Users&#39; use of QUARTS MOBILE.{'\n'}
            <Text>{'\u2022'}</Text> Users may reach out to QUARTS MOBILE through -{'\n'}{'\n'}
            o Helpdesk if the user has any concerns with regard to a match and/or contest
            within Forty-Eight (48) hours of winner declaration for the concerned contest.{'\n'}
            <Text>{'\u2022'}</Text> Persons below the age of eighteen (18) years are not allowed to participate on any of
            the contests, games (by whatever name called) on the QUARTS MOBILE Platform. The
            Users will have to disclose their real age at the time of getting access into the QUARTS
            MOBILE Platform.{'\n'}
            <Text>{'\u2022'}</Text> QUARTS MOBILE may not be held responsible for any content contributed by Users on
            the QUARTS MOBILE.{'\n'}{'\n'}
            12. Payment Terms{'\n'}{'\n'}
            <Text>{'\u2022'}</Text> In respect of any transactions entered into on the QUARTS MOBILE platform, including
            making a payment to participate in the paid versions of Contest(s), Users agree to be
            bound by the following payment terms:{'\n'}{'\n'}
            o The payment of pre-designated amount Users make to participate in the
            Contest(s) is inclusive of the pre-designated platform fee (when applicable) for
            access to the QUARTS MOBILE Services charged by QUARTS MOBILE and pre-
            determined participant’s contribution towards prize money pool.{'\n'}
            o Subject to these Terms and Conditions, all amounts collected from the User
            are held, until determination of the Winners and distribution of prizes. QUARTS
            MOBILE receives only its share of the platform Fees, subject to applicability.{'\n'}
            o The User may participate in a Contest wherein the User has to contribute a pre-
            specified contribution towards the Prize Money Pool of such Contest, which

            will be passed on to the Winner(s) of the Contest after the completion of the
            Contest as per the terms and conditions of such Contest. It is clarified that
            QUARTS MOBILE has no right or interest in this Prize Money Pool, and only acts
            as an intermediary engaged in collecting and distributing the Prize Money Pool
            in accordance with the Contest terms and conditions. The amount to be paid-
            in by the User towards the Prize Money Pool would also be debited from the
            User’s account balance.{'\n'}
            o Any user availing QUARTS MOBILE services are provided with two categories of
            accounts for the processing and reconciliation of payments: (i) ‘Unplayed’
            Account, (ii) Winnings Account. It is clarified that in no instance the transfer of
            any amounts in the User&#39;s accounts to any other category of account held by
            the user or any third-party account, including a bank account held by a third
            party:{'\n'}{'\n'}
            <Text>{'\u2022'}</Text> User&#39;s winnings can be credited in any wallet sub-section (Deposits,
            Bonus, Winnings) in any proportion at QUARTS MOBILE &#39;s sole
            discretion.{'\n'}
            <Text>{'\u2022'}</Text> User’s remitting the amount the designated payment gateway shall be
            credited to User’s ‘Unplayed’ Account’.{'\n'}{'\n'}

            o Each time a User participates in any contest on QUARTS MOBILE platform, the
            pre-designated amount shall be debited in the User’s account. In debiting
            amounts from the User’s accounts towards the pre-designated amount of such
            user shall be debited from the User’s Unplayed Account and thereafter, any
            remaining amount of participation fee shall be debited from the User’s Winning
            Account.{'\n'}
            o In case there is any amount remaining to be paid by the User in relation to such
            User’s participation in any match(s) or Contest(s), the User will be taken to the
            designated payment gateway to give effect to such payment. In case any
            amount added by the User through such payment gateway exceeds the
            remaining amount of the pre-designated amount, the amount in excess shall
            be transferred to the User’s ‘Unplayed’ Account and will be available for use in
            participation in any match(s) or Contest(s) or for withdrawal in accordance
            with these Terms and Conditions.{'\n'}
            o Debits from the ‘Unplayed’ Account for the purpose of enabling a user’s
            participation in a Contest shall be made in order of the date of credit of
            amounts in the ‘Unplayed’ Account, and accordingly amounts credited into
            ‘Unplayed’ Account earlier in time shall be debited first.{'\n'}
            o A User shall be permitted to withdraw any amounts credited into such User&#39;s
            ‘Unplayed’ Account for any reason whatsoever by contacting QUARTS MOBILE
            Customer Support. All amounts credited into a User&#39;s ‘Unplayed’ Account must
            be utilised within 60 days of credit. In case any unutilised amount lies in the
            ‘Unplayed’ Account after the completion of 60 days from the date of credit of
            such amount, QUARTS MOBILE reserves the right to forfeit such unutilized

            amount, without liability or obligation to pay any compensation to the User.
            Users are requested to note that they will be required to provide valid photo
            identification and address proof documents for proof of identity and address in
            order for QUARTS MOBILE to process the withdrawal request. The name
            mentioned on the User&#39;s photo identification document should correspond
            with the name provided by the User at the time of registration on QUARTS
            MOBILE, as well as the name and address existing in the records of the User&#39;s
            bank account as provided to QUARTS MOBILE. In the event that no bank
            account has been registered by the User against such User&#39;s account with
            QUARTS MOBILE, or the User has not verified his/her User account with
            QUARTS MOBILE, to QUARTS MOBILE &#39;s satisfaction and in accordance with
            these Terms and Conditions, QUARTS MOBILE shall provide such User with a
            notification to the User&#39;s email address as on record with QUARTS MOBILE at
            least 30 days prior to the Request Date, and in case the User fails to register a
            bank account with his/her User Account and/or to verify his/her User Account
            by the Request date, QUARTS MOBILE shall be entitled to forfeit any amounts
            subject to transfer. Failure to provide QUARTS MOBILE with a valid bank
            account or valid identification documents (to QUARTS MOBILE &#39;s satisfaction)
            may result in the forfeiture of any amounts subject to transfer in accordance
            with this clause.{'\n'}
            o Withdrawal of any amount standing to the User&#39;s credit in the Winnings
            Account may be made by way of a request to QUARTS MOBILE but the amount
            will be forfeit upon completion of 60 days from the date of credit of such
            amount in the User&#39;s Winnings Account or upon completion of 60 days of in-
            activity.{'\n'}
            o Further, in order to conduct promotional activities, QUARTS MOBILE may
            gratuitously issue Bonus points (Called as Cash Bonus) to the User for the
            purpose of participation in any Contest(s) and no User shall be permitted to
            transfer or request the transfer of any amount in to the Cash Bonus. The usage
            of any points issued shall be subject to the limitations and restrictions,
            including without limitation, restrictions as to time within which such points
            must be used, as applied by QUARTS MOBILE and notified to the User at the
            time of issue of such amount. The issue of any points to the user is subject to
            the sole discretion of QUARTS MOBILE and cannot be demanded by any User as
            a matter of right. The issue of any such amount by QUARTS MOBILE on any day
            shall not entitle the user to demand the issuance of such amount at any
            subsequent period in time nor create an expectation of recurring issue of such
            amount by QUARTS MOBILE to such User. The bonus points/Cash Bonus
            granted to the user may be used by such User for the purpose of setting off
            against the contribution to prize pool in any Contest, in accordance with these
            Terms and Conditions. The bonus points shall not be withdraw-able or
            transferrable to any other account of the User, including the bank account of

            such User, or of any other User or person, other that as part of the winnings of a
            User in any Contest(s). In case the User terminates his/her account with
            QUARTS MOBILE or such account if terminated by QUARTS MOBILE, all bonus
            points granted to the user shall return to QUARTS MOBILE and the User shall
            not have any right or interest on such points.{'\n'}
            o All cash bonus credited in the User account shall be valid for a period of 14 days
            from the date of credit. The cash bonus shall lapse at the end of 14 days and
            the cash bonus amount shall not reflect in the User account.{'\n'}
            o Users agree that once they confirm a transaction on QUARTS MOBILE, they
            shall be bound by and make payment for that transaction.{'\n'}
            o The User acknowledges that subject to time taken for bank reconciliations and
            such other external dependencies that QUARTS MOBILE has on third parties,
            any transactions on QUARTS MOBILE Platform may take up to 24 hours to be
            processed. Any amount paid or transferred into the User&#39;s ‘Unplayed’ Account
            or Winnings Account may take up to 24 hours to reflect in the User&#39;s ‘Unplayed’
            Account or Winnings Account balance. Similarly, the utilization of the bonus
            points or money debited from ‘Unplayed’ Account or Winnings Account may
            take up to 24 hours to reflect in the User&#39;s ‘Unplayed’ Account or Winnings
            Account balance. Users agree not to raise any complaint or claim against
            QUARTS MOBILE in respect of any delay, including any lost opportunity to join
            any Contest or match due to delay in crediting of transaction amount into any
            of the User&#39;s accounts.{'\n'}
            o A transaction, once confirmed, is final and no cancellation is permissible.
            QUARTS MOBILE may, in certain exceptional circumstances and at its sole and
            absolute discretion, refund the amount to the User after deducting applicable
            cancellation charges and taxes. At the time of the transaction, Users may also
            be required to take note of certain additional terms and conditions and such
            additional terms and conditions shall also govern the transaction. To the
            extent that the additional terms and conditions contain any clause that is
            conflicting with the present terms and conditions, the additional terms and
            conditions shall prevail.{'\n'}
            o The real money added by the User on QUARTS MOBILE will solely be applied
            towards the rights provided to you, by the Company, to play any game/s. Such
            amount will be completely non-refundable and non-transferrable and can only
            and only be utilized towards the playing of games on QUARTS MOBILE. The
            T&amp;C of each game would be displayed, along with the fixed/ variable winnings
            amount which the User may win on participation and successful completion of
            the terms of the game. Such amounts will be decided by the Company for each
            game separately. The User would be eligible to withdraw only to the extent of
            their winnings (before that expires) and after submission of relevant
            documentation to the Company.{'\n'}{'\n'}

            <Text>{'\u2022'}</Text> Miscellaneous{'\n'}{'\n'}

            o The decision of QUARTS MOBILE with respect to the awarding of prizes shall be
            final, binding and non-contestable.{'\n'}
            o The final assessment of wins by a User shall be determined at the time of
            withdrawal of Wins, which will be subject to applicable direct and indirect
            taxes. The withdrawal of Wins shall be subject to applicable TDS as per the
            provisions of the Income Tax Act (as described under Tax and TDS Policy){'\n'}
            o Participants playing the paid formats of the Contest(s) confirm that they are
            not residents of any of the following Indian states - Andhra Pradesh, Assam,
            Odisha, Sikkim, Nagaland or Telangana. If it is found that a Participant playing
            the paid formats of the Contest(s) is a resident of any of the abovementioned
            states, QUARTS MOBILE shall disqualify such Participant and forfeit any prize
            won by such Participant. Further QUARTS MOBILE may, at its sole and absolute
            discretion, suspend or terminate such Participant&#39;s account with QUARTS
            MOBILE. Any amount remaining unused in the User&#39;s Game Account or
            Winnings Account on the date of deactivation or deletion shall be reimbursed
            to the User by an online transfer to the User&#39;s bank account on record with
            QUARTS MOBILE, subject to the processing fee (if any) applicable on such
            transfers as set out herein.{'\n'}
            o If it is found that a Participant playing the paid formats of the Contest(s) is
            under the age of eighteen (18), QUARTS MOBILE shall be entitled, at its sole and
            absolute discretion, to disqualify such Participant and forfeit his/her prize.
            Further, QUARTS MOBILE may, at its sole and absolute discretion, suspend or
            terminate such Participant&#39;s account.{'\n'}
            o To the extent permitted by law, QUARTS MOBILE makes no representations or
            warranties as to the quality, suitability or merchantability of any prizes and
            shall not be liable in respect of the same.{'\n'}
            o QUARTS MOBILE may, at its sole and absolute discretion, vary or modify the
            prizes being offered to winners. Participants shall not raise any claim against
            QUARTS MOBILE or question its right to modify such prizes being offered, prior
            to closure of the Contest.{'\n'}
            o QUARTS MOBILE will not bear any responsibility for the transportation or
            packaging of prizes to the respective winners. QUARTS MOBILE shall not be
            held liable for any loss or damage caused to any prizes at the time of such
            transportation.{'\n'}
            o The Winners shall bear the shipping, courier or any other delivery cost in
            respect of the prizes.{'\n'}
            o The Winners shall bear all transaction charges levied for delivery of cash prizes.{'\n'}
            o All prizes are non-transferable and non-refundable. Prizes cannot be
            exchanged / redeemed for cash or kind. No cash claims can be made in lieu of
            prizes in kind.{'\n'}{'\n'}

            12.1. Release and Limitations of Liability{'\n'}{'\n'}
            <Text>{'\u2022'}</Text> Users shall access the QUARTS MOBILE Services provided on QUARTS MOBILE
            voluntarily and at their own risk. QUARTS MOBILE shall, under no circumstances be
            held responsible or liable on account of any loss or damage sustained (including but
            not limited to any accident, injury, death, loss of property) by Users or any other
            person or entity during the course of access to the QUARTS MOBILE Services
            (including participation in the Contest(s)) or as a result of acceptance of any prize.{'\n'}
            <Text>{'\u2022'}</Text> By entering the contests and accessing the QUARTS MOBILE Services provided therein,
            Users hereby release from and agree to indemnify QUARTS MOBILE, and/ or any of its
            directors, employees, partners, associates and licensors, from and against all liability,
            cost, loss or expense arising out their access to the QUARTS MOBILE Services including
            (but not limited to) personal injury and damage to property and whether direct,
            indirect, consequential, foreseeable, due to some negligent act or omission on their
            part, or otherwise.{'\n'}
            <Text>{'\u2022'}</Text> QUARTS MOBILE accepts no liability, whether jointly or severally, for any errors or
            omissions, whether on behalf of itself or third parties in relation to the prizes.{'\n'}
            <Text>{'\u2022'}</Text> Users shall be solely responsible for any consequences which may arise due to their
            access of QUARTS MOBILE Services by conducting an illegal act or due to non-
            conformity with these Terms and Conditions and other rules and regulations in
            relation to QUARTS MOBILE Services, including provision of incorrect address or other
            personal details. Users also undertake to indemnify QUARTS MOBILE and their
            respective officers, directors, employees and agents on the happening of such an
            event (including without limitation cost of attorney, legal charges etc.) on full
            indemnity basis for any loss/damage suffered by QUARTS MOBILE on account of such
            act on the part of the Users.{'\n'}
            <Text>{'\u2022'}</Text> Users shall indemnify, defend, and hold QUARTS MOBILE harmless from any third
            party/entity/organization claims arising from or related to such User&#39;s engagement
            with the QUARTS MOBILE or participation in any Contest. In no event shall QUARTS
            MOBILE be liable to any User for acts or omissions arising out of or related to User&#39;s
            engagement with the QUARTS MOBILE or his/her participation in any Contest(s).
            <Text>{'\u2022'}</Text> In consideration of QUARTS MOBILE allowing Users to access the QUARTS MOBILE
            Services, to the maximum extent permitted by law, the Users waive and release each
            and every right or claim, all actions, causes of actions (present or future) each of them
            has or may have against QUARTS MOBILE, its respective agents, directors, officers,
            business associates, group companies, sponsors, employees, or representatives for all
            and any injuries, accidents, or mishaps (whether known or unknown) or (whether
            anticipated or unanticipated) arising out of the provision of QUARTS MOBILE Services
            or related to the Contests or the prizes of the Contests.{'\n'}{'\n'}

            12.2. Standard Terms and Conditions of Promotions{'\n'}{'\n'}
            This “Cashback Promotion” (“Promotion”), is open for participation to existing users of
            QUARTS MOBILE{'\n'}
            <Text>{'\u2022'}</Text> No person shall seek participation in the Promotion as a matter of right.{'\n'}
            <Text>{'\u2022'}</Text> THE BONUS AMOUNT SHALL EXPIRE AND BE WITHOUT EFFECT AT THE END OF
            FOURTEEN DAYS FROM THE DATE OF CREDIT OF THE BONUS AMOUNT.{'\n'}{'\n'}

            12.4. Standard Terms and Conditions of Invite Friends program{'\n'}{'\n'}
            The QUARTS MOBILE Invite Friends Program lets you invite friends to join QUARTS MOBILE
            (&quot;Program&quot;). In the event that you and your referred friend meet the criteria and complete all
            the steps specified in these terms, you and your friend can earn a Cash Bonus from QUARTS
            MOBILE of upto Rs. 100 (&quot;Bonus Amount&quot;), which Bonus Amount will be redeemable to join
            cash contests and contests through the QUARTS MOBILE’s mobile application for the iOS
            and/or Android mobile devices (&quot;QUARTS MOBILE Application&quot;). To participate in the
            Program, please note our terms and conditions (&quot;Terms&quot;) in this respect, as they govern your
            participation in the Program:{'\n'}
            <Text>{'\u2022'}</Text> Participation in the Program is voluntary. A user shall not register or operate more
            than one user account with QUARTS MOBILE and shall not participate in the Program
            with more than one user account with QUARTS MOBILE.{'\n'}
            <Text>{'\u2022'}</Text> By participating in the Program, you agree to and accept these Terms.{'\n'}
            <Text>{'\u2022'}</Text> For the purpose of participation in the Program, you are required to have the QUARTS
            MOBILE Application downloaded and installed on your mobile device. Through the
            QUARTS MOBILE Application, you will be provided with a unique link or code, which
            can be shared by you (&quot;Inviter&quot;) with friends (each an &quot;Invitee&quot;) for the purpose of
            inviting such friends to create and register an account with QUARTS MOBILE and
            download the QUARTS MOBILE Application. On receiving the link or code from the
            Inviter, the Invitee may either: (i) Click on the link, consequent to which such Invitee
            will be directed to a registration page and will be provided the option to register an
            account with QUARTS MOBILE and download and install the QUARTS MOBILE
            Application on his/her device; or (ii) download and install the QUARTS MOBILE
            Application on his/her device independently, register for a QUARTS MOBILE account
            through the QUARTS MOBILE Application and enter the unique code shared by the
            Inviter.{'\n'}
            <Text>{'\u2022'}</Text> The Inviter and the Invitee will be eligible to earn the Bonus Amount subject to
            (amongst other terms specified in these Terms): (i) the Invitee not being an existing
            user of QUARTS MOBILE; and (ii) the Invitee successfully registering for an account
            with QUARTS MOBILE through the unique link or by using the unique code shared by
            the Inviter; and (iii) the Inviter and Invitee verifying the Inviter’s and the Invitee’s
            respective mobile number as provided at the time of registration within thirty (30)
            days from the date on which Invitee registers for an account with QUARTS MOBILE
            (&quot;Verification Period&quot;). For the purposes of these Terms, an &#39;existing user of QUARTS
            MOBILE shall mean a user who presently operates an account with the Platform or
            operated an account with the Platform at any point of time.{'\n'}
            <Text>{'\u2022'}</Text> An Invitee who is an existing user of QUARTS MOBILE is not permitted to register a new
            account with the Platform for the purpose of availing of the Bonus Amount. QUARTS
            MOBILE will determine in its sole discretion whether an Invitee is an existing user of
            QUARTS MOBILE or not and take appropriate action.{'\n'}
            <Text>{'\u2022'}</Text> The verification process may require an Inviter/Invitee to submit personal information
            about the user (Inviter/Invitee) and documents identifying the Inviter/Invitee. The
            Inviter agrees to receive communication from QUARTS MOBILE and to allow QUARTS{'\n'}

            MOBILE to communicate with Invitees referred by you about the Inviter&#39;s participation
            in the Program. Any information collected in respect of the Inviter/Invitee as part of
            the Program or otherwise in the course of such person&#39;s use of the Website shall be
            subject to QUARTS MOBILE &#39;s Privacy Policy (available
            here: https://www.quartsworld.com/privacy-policy for Indian users).{'\n'}
            <Text>{'\u2022'}</Text> The verification of an Inviter/Invitee shall be completed at the time of first withdrawal
            by the Inviter/Invitee from the Inviter’s/Invitee&#39;s &#39;Your Winnings&#39; account or &#39;Your
            Deposits&#39; account with the Platform. An Inviter/Invitee may voluntarily seek
            verification of the Inviter/Invitee by clicking on the &#39;Verify Now&#39; tab of the Account
            Balance page of the Inviter/Invitee&#39;s account with the Platform. In the event that the
            Invitee opts to register for a QUARTS MOBILE account through the QUARTS MOBILE
            Application, the Invitee can verify his/her contact information at the time of
            registration.{'\n'}
            <Text>{'\u2022'}</Text> THE BONUS AMOUNT SHALL EXPIRE AND BE WITHOUT EFFECT AT THE END OF
            FOURTEEN DAYS FROM THE DATE OF CREDIT OF THE BONUS AMOUNT.{'\n'}
            <Text>{'\u2022'}</Text> The deposit of the Bonus Amount shall be at the sole discretion of QUARTS MOBILE
            and shall be subject to the Inviter’s/Invitee’s compliance with these Terms. QUARTS
            MOBILE may substitute or change the Bonus Amount offered under the Program at
            any time without notice. An Inviter/Invitee may not substitute the amount of Bonus
            Amount or substitute offering for other items or exchange for cash.{'\n'}{'\n'}
            <Text>{'\u2022'}</Text> QUARTS MOBILE reserves the right to:{'\n'}{'\n'}
            o withhold the deposit of the Bonus Amount; and/or{'\n'}
            o forfeit any deposited Bonus Amount to an Inviter/Invitee or any
            prizes/winnings earned by the participant by using such Bonus Amount; and/or{'\n'}
            o credit the user&#39;s winnings amount in any contest in any wallet sub-section
            (Deposits, Bonus, Winnings) in any proportion at QUARTS MOBILE &#39;s sole
            discretion{'\n'}{'\n'}

            <Text>{'\u2022'}</Text> Mere participation in the Program does not entitle the Inviter/Invitee to receive any
            Bonus Amount.{'\n'}
            <Text>{'\u2022'}</Text> QUARTS MOBILE may, at its sole and absolute discretion, disqualify any Inviter/Invitee
            if such Inviter/Invitee engages in or it is found that such Inviter/Invitee has engaged in
            any illegal, unlawful or improper conduct (with regard to the Program or otherwise).{'\n'}
            <Text>{'\u2022'}</Text> The decision of QUARTS MOBILE will be final and binding with regard to the Program,
            and the deposit of the Bonus Amount and no correspondence, objection, complaints,
            etc. will be entertained in this regard.{'\n'}
            <Text>{'\u2022'}</Text> This Program cannot be clubbed with any other contests/promotions/programs that
            are running simultaneously and organized or conducted by QUARTS MOBILE.
            <Text>{'\u2022'}</Text> QUARTS MOBILE reserves the right to change/modify/or withdraw the Program and/or
            change these terms and conditions without any prior notice of the same at its sole
            discretion.{'\n'}
            <Text>{'\u2022'}</Text> The Terms and Conditions, as applicable to the QUARTS MOBILE &#39;s fantasy games and
            services, will apply to and govern the Program.{'\n'}

            <Text>{'\u2022'}</Text> QUARTS MOBILE does not make any commitment, express or implied, to respond to
            any feedback, suggestion and, or, queries of the participants (Inviter/Invitee) of the
            Program.{'\n'}

          </Text>

          {params.check2 ? (
            <CustomButton
              touchWidth="100%"
              style={{ backgroundColor: "#fb4141" }}
              onPress={() => {
                params.setCheck2(false);
                props.navigation.navigate("Start");
              }}
            >
              I Disagree
            </CustomButton>
          ) : (
            <CustomButton
              touchWidth="100%"
              onPress={() => {
                params.setCheck2(true);
                props.navigation.navigate("Start");
              }}
            >
              I Agree
            </CustomButton>
          )}
          <BackToHome
            onPress={() => {
              // params.setCheck2(true);
              props.navigation.navigate("Start");
            }}
            next={true}
            back={true}
          />
        </View>



        {/* <View style={{ ...styles.first, ...globalStyles.border }}>
          <Heading style={{ color: "white", fontSize: 14 }}>
            Intrepretations And Definitions
          </Heading>
          <Text
            style={{
              ...globalStyles.text,
              marginBottom: 25,
              marginTop: 10,
            }}
          >
            he words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </Text>
          {params.check2 ? (
            <CustomButton
              touchWidth="100%"
              style={{ backgroundColor: "#fb4141" }}
              onPress={() => {
                params.setCheck2(false);
                props.navigation.navigate("Start");
              }}
            >
              I Disagree
            </CustomButton>
          ) : (
            <CustomButton
              touchWidth="100%"
              onPress={() => {
                params.setCheck2(true);
                props.navigation.navigate("Start");
              }}
            >
              I Agree
            </CustomButton>
          )}
          <BackToHome
            onPress={() => {
              // params.setCheck2(true);
              props.navigation.navigate("Start");
            }}
            next={true}
          />
        </View> */}
      </View>
    </ScrollView>
  );
};

export default TermsAndServices;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.SignBackground,
    padding: 20,
    width: "100%",
    paddingTop: StatusBar.currentHeight,
  },
  first: {
    width: "100%",
    padding: 20,
    flex: 1,
    marginVertical: 5,
  },
});
