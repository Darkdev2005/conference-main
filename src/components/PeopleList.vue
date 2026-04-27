<template>
  <div class="people-section">
    <div class="people-inner">
      <div class="section-header">
        <span class="eyebrow">Conference Participants</span>
        <h1 class="section-title">Speakers & Session Chairs</h1>
        <p class="section-desc">Distinguished academics, researchers, and industry leaders from institutions worldwide</p>
      </div>

      <div v-for="(people, role) in speakerData" :key="role" class="role-block">
        <div class="role-heading-row">
          <div class="role-line" />
          <h2 class="role-heading">{{ role }}</h2>
          <div class="role-line" />
        </div>

        <div v-if="people.length === 0" class="tba-card">
          <span class="tba-text">To Be Announced</span>
        </div>

        <div v-else class="people-grid">
          <div
            v-for="(person, index) in people"
            :key="index"
            class="person-card"
            :class="{ expanded: person.showDetails }"
          >
            <div class="card-top">
              <div class="person-image-wrap">
                <img
                  :src="person.image || 'https://placehold.co/240x280?text=TBA'"
                  :alt="person.name || 'TBA'"
                  class="person-image"
                />
              </div>
              <div class="person-info">
                <h3 class="person-name">{{ person.name || 'TBA' }}</h3>
                <p class="person-title">{{ person.title || 'TBA' }}</p>
                <button
                  v-if="person.institution"
                  class="toggle-btn"
                  :class="{ open: person.showDetails }"
                  @click="person.showDetails = !person.showDetails"
                >
                  <component :is="person.showDetails ? ChevronUp : ChevronDown" class="toggle-icon" />
                  {{ person.showDetails ? 'Hide Bio' : 'Read Bio' }}
                </button>
              </div>
            </div>

            <div class="bio-wrap" :style="person.showDetails ? 'max-height: 600px; opacity: 1;' : 'max-height: 0; opacity: 0;'">
              <div class="bio-inner">
                <p class="bio-text">{{ person.institution }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDown, ChevronUp } from 'lucide-vue-next'

import Picture1   from '../assets/images/photo_2023-07-20_14-34-48.jpg'
import Picture12  from '../assets/images/5Q5A0035.jpg'
import Picture13  from '../assets/images/5Q5A0085.jpg'
import Picture14  from '../assets/images/Xushvaqtov H. Photo 2 - Utkirjon Holikulov.jpg'
import Picture2   from '../assets/images/photo_2025-05-09_10-16-49.jpg'
import Picture4   from '../assets/images/5Q5A0005.jpg'
import Picture5   from '../assets/images/0W2A0954.jpg'
import Picture6   from '../assets/images/photo_2025-05-13_11-45-02.jpg'
import Picture7   from '../assets/images/IMG_0208++1+ (2).jpg'
import Picture8   from '../assets/images/Akbar Rashidov.jpg'
import Picture9   from '../assets/images/Sherzod Yarmatov.jpg'
import Picture15  from '../assets/images/image111.jpg'
import Picture16  from '../assets/images/image222.jpg'
import Picture17  from '../assets/images/photo_2025-05-12_09-13-06.jpg'
import Picture18  from '../assets/images/Engr. Abubokor Hanip.jpg'
import Picture19  from '../assets/images/Dr. Touhid Bhuiyan.jpg'
import Picture20  from '../assets/images/Paul Eliopoulos.png'
import Picture21  from '../assets/images/Dr. Necmi Mutlu.jpg'
import Picture22  from '../assets/images/Mahmood Menon Khan.jpg'
import Picture23  from '../assets/images/Dr Sumegh Tharewal.jpg'
import Picture24  from '../assets/images/Dr. Maria Lapina.jpg'
import Picture25  from '../assets/images/3bf1be38-2649-4daa-8364-26de037f570c.png'
import Picture26  from '../assets/images/Prof. Dr. Andrei Tchernykh.jpg'
import Picture27  from '../assets/images/Mikhail Babenkov.jpg'
import Picture28  from '../assets/images/Dr. Manish Kumar Singla.jpg'
import Picture29  from '../assets/images/Assel Abakova.jpg'
import Picture30  from '../assets/images/Besnik Limaj.jpg'
import Picture31  from '../assets/images/Anirban Bandyopadhyay.jpg'
import Picture32  from '../assets/images/Dr. Munish Sabharwal.webp'
import Picture33  from '../assets/images/citations.jpeg'
import Picture34  from '../assets/images/Invited Speakers1.jpg'
import Picture35  from '../assets/images/Invited Speakers2.jpg'
import Picture36  from '../assets/images/Invited Speakers3.jpg'
import Picture37  from '../assets/images/Invited Speakers4.png'
import Picture38  from '../assets/images/Invited Speakers5.png'
import Picture39  from '../assets/images/338kanadray.jpg'
import Picture40  from '../assets/images/Chen_Zhuo_Adam_HPAM.jpg'
import Picture41  from '../assets/images/photo_2025-11-03_17-55-58.jpg'
import Picture42  from '../assets/images/Jimbo.jpg'

export default {
  name: 'PeopleList',
  components: { ChevronDown, ChevronUp },
  setup() {
    return { ChevronDown, ChevronUp }
  },
  data() {
    return {
      speakerData: {
        'Inaugural Session': [
          {
            name: 'Rustam Xalmuradov Ibragimovich',
            title: 'Doctor of Economics, Professor',
            institution: `Doctor of Economics, Professor. Former Rector of Samarkand State University. Has extensive experience in higher education management, economic research, and academic leadership. Author of numerous scientific articles and educational works in the field of economics. Contributed significantly to the development of the higher education system and regional economic studies in Uzbekistan.`,
            image: Picture1,
            showDetails: false,
          },
        ],
        'Guest of Honor': [
          {
            name: 'Axatov Akmal Rustamovich',
            title: 'Doctor of Technical Sciences, Professor',
            institution: `Doctor of Technical Sciences, Professor. Researcher in the fields of digital technologies and artificial intelligence. Has extensive experience in information technologies, data analysis, and software development. Author of numerous scientific articles and research works. Contributed to the training of specialists and the development of modern IT and AI systems in Uzbekistan.`,
            image: Picture12,
            showDetails: false
          },
          {
            name: 'Soleev Ahmadjon Soleevich',
            title: 'First Vice-Rector for Academic Affairs, Professor of Algebra and Geometry',
            institution: `Professor of Algebra and Geometry at Samarkand State University and First Vice-Rector for Academic Affairs since 2017. An experienced academic leader specializing in higher education management, curriculum development, and quality assurance. Oversees the implementation of modern teaching methods, digital and distance learning technologies, and faculty development. Actively engaged in advancing international collaboration and training highly qualified specialists in line with national and global education standards.`,
            image: Picture13,
            showDetails: false
          },
          {
            name: 'Xushvaktov Hakim Abdilxakovich',
            title: 'Vice-Rector for Research and Innovation',
            institution: `Vice-Rector for Research and Innovation at Samarkand State University since 2018. An experienced academic administrator with strong expertise in research management, innovation development, and higher education systems. Oversees the implementation of national education policies, advancement of scientific research, integration of modern technologies in teaching, and quality assurance processes. Actively promotes international collaboration, supports talented students and researchers, and contributes to the development of academic staff and institutional performance in line with global standards.`,
            image: Picture14,
            showDetails: false
          },
          { name: 'Engr. Abubokor Hanip', title: 'Founder & President, Washington University of Science and Technology', institution: 'Engr. Abubokor Hanip, a distinguished entrepreneur and educationist from Bangladesh, has forged a remarkable career rooted in innovation, hard work, and dedication. Over the past two decades, he has pioneered transformative skill development and job placement models through his flagship initiative, PeopleNTech Institute of Information Technology (PIIT), operating across the USA, Canada, Bangladesh, and beyond. A graduate in Electrical and Electronic Engineering from CUET and holder of a Master\'s in Computer Science from NYIT, he has extensive experience working with IBM, the Department of Defense, IRS, FDIC, and Oracle Corporation. He has empowered over 10,000 individuals to secure high-paying IT roles and is the first Bangladeshi American to establish a model university in the USA - Washington University of Science and Technology.', image: Picture18, showDetails: false },
        ],
        'Plenary Talk': [
          {
            name: 'Nazarov Fayzullo Makhmadiyarovich',
            title: 'Dean, Faculty of Artificial Intelligence and Digital Technologies',
            institution: `Dean of the Faculty of Artificial Intelligence and Digital Technologies at Samarkand State University since 2023. Previously served as Head of the Department of Artificial Intelligence and Information Systems (2022-2023), Head of the Department of Information Technologies (2021-2022), and Assistant at the same department (2015-2019). An emerging academic leader specializing in artificial intelligence, information systems, and digital technologies. Actively involved in advancing research, modernizing education, and integrating innovative solutions into academic programs. International experience includes an internship at Galgotias University, contributing to global academic collaboration and knowledge exchange.`,
            image: Picture4,
            showDetails: false
          },
          {
            name: 'Nurmamatov Mekhriddin Kahramonovich',
            title: 'PhD in Technical Sciences, Associate Professor',
            institution: `PhD in Technical Sciences, Associate Professor at Samarkand State University. In 2022, defended a doctoral dissertation on the topic of automated regulation of labor relations based on employment modeling in the labor market. Since 2024, has been working at the Department of Control Theory and Information Security. Author of 1 textbook, 2 methodological manuals, 4 patents, and over 50 scientific publications, including 7 articles indexed in Scopus and Web of Science. Research interests focus on control systems, labor market modeling, and information security, with active contributions to internationally recognized scientific journals and conferences.`,
            image: Picture5,
            showDetails: false
          },
          {
            name: 'Sazzad Hossain',
            title: 'PhD in Computer Science and Engineering, Professor',
            institution: `Distinguished academic leader, researcher, and technology strategist with over three decades of experience in quantum computing, artificial intelligence, cybersecurity, IoT, robotics, and digital transformation. He has a strong track record in university teaching, scholarly research, and industry-academia collaboration, as well as in startup development and innovation ecosystem building. He has contributed to educational reform through OER and blended learning design, national education governance, and leadership in the satellite sector. Actively engaged in organizing international conferences and promoting cross-border academic collaboration across Bangladesh, the USA, Russia, and Uzbekistan.`,
            image: Picture6,
            showDetails: false
          },
          {
            name: 'Dr. Jimbo H. Claver',
            title: 'Professor, PhD Supervisor, Dean of School, and JSPS Fellow',
            institution: `Dr. Jimbo H. Claver received in 2000 the Ph.D. degree in Applied Mathematics and Statistics from Lomonosov Moscow State University and completed his post-doctoral studies at the Institute of Statistical Mathematics in Tokyo, Japan. Currently, he is Full Professor and Dean of the French Higher School of Engineering and Commerce (FHSEC) at the Samarkand International University of Technology (SIUT). His previous positions include Assistant Dean and Head of the Department of Mathematics at the American International University (Kuwait), Full Professor of Applied Mathematics at the American University of Afghanistan, Associate Professor of Applied Mathematics at the Nara Institute of Science and Technology (Japan), Visiting Professor of Applied Mathematics at Waseda University (Japan), Assistant Professor of Mathematics and Statistics at Lakeland College, Tokyo (Japan), Senior Lecturer at the University of York (United Kingdom), Lecturer at Sino British College-Shanghai Institute of Science and Technology (China), Visiting Research Fellow at Swiss Banking Institute (Zurich), and Visiting Fellow at Morehouse College, Atlanta, Georgia (USA). His research focuses on system modelling, predictive analysis, system control, stochastic processes, applied probability, applied statistics, data analysis, quantitative finance, and actuarial science. In addition, he serves as editor and reviewer of several international journals and is a member of the International Mathematical Union (IMU), Japan Mathematical Society (JMS), Japan Statistical Society (JSS), and Moscow Mathematical Society (MMS). He has published eight books and numerous scientific papers in pure mathematics, applied mathematics, applied statistics, quantitative finance, quantitative risk management, and data analysis in peer-reviewed journals and conference proceedings. He has also organized numerous international workshops and conferences and supervised countless MSc, PhD, and MBA students.`,
            image: Picture42,
            showDetails: false
          },
          { name: 'Normakhmad Ravshanov', title: 'Adviser to the Director on Science', institution: 'Doctor of Technical Sciences, Professor. Scientific Advisor to the Director of the Research Institute for the Development of Digital Technologies and Artificial Intelligence. Over 44 years of experience in mathematical modeling, informatization and ICT. Author of more than 450 scientific articles, 10+ monographs, and 25+ software certificates. Supervised 1 Doctor of Science, 1 Candidate of Science and 16 Doctors of Philosophy in technical sciences.', image: Picture25, showDetails: false },
          { name: 'Xidong Deng', title: 'AI and Machine Learning for Public Health', institution: 'Ph.D. IT leader and public health informatics expert with 15+ years at the CDC. As Lead Computer Scientist and Data Architect at NCCDPHP, she spearheaded AI integration, cloud modernization, and deployed OpenAI-powered public health surveillance systems. Founder of the NCCDPHP AI Community of Practice. Ph.D. in Computer Science from Penn State University.', image: Picture2, showDetails: false },
          { name: 'Prof. Dr. Andrei Tchernykh', title: 'Full Professor, CICESE Research Center, Mexico; Adjunct Chief Scientist, ISP RAS', institution: 'Leading expert in parallel and cloud computing, AI, and high-performance systems. Heads the Laboratory of Parallel and Cloud Computing at CICESE. SNI Level 3 researcher, founding member of Mexico\'s Supercomputer Society. Published over 360 scientific papers, chaired 50+ conferences, mentored 50+ PhD and Master\'s students.', image: Picture26, showDetails: false },
          { name: 'Mikhail Babenkov', title: 'Head of Department of Computational Mathematics and Cybernetics, NCFU, Russia', institution: 'Young accomplished scientist at North-Caucasus Federal University. Research spans algebraic structures over Galois fields, modular arithmetic, neural computing, and cryptographic information protection. Over 180 scientific works indexed in WoS and Scopus, 50+ patents. Governor\'s Award of the Stavropol Region (2017). Recently developed an AI system predicting inflation with 93% accuracy.', image: Picture27, showDetails: false },
          { name: 'Dr. Manish Kumar Singla', title: 'Assistant Professor, Chitkara University', institution: 'Ph.D. in Electrical Engineering from Thapar Institute. Expertise in Machine Learning, Fuel Cell, Renewable Energy, Solar PV, and Optimization. H-index of 18, 49 SCI/SCIE papers, 38 Scopus papers, 24 granted patents. International Outstanding Young Researcher Award 2024. Edited four Scopus-indexed books.', image: Picture28, showDetails: false },
          { name: 'Assel Abakova', title: 'Government Relations Director, Qaz.AI, Kazakhstan', institution: 'Prominent expert in AI policy in Kazakhstan. At Qaz.AI, she shapes Kazakhstan\'s AI ecosystem through policymaking, ethical governance, and public-private partnerships. Co-hosts an AI podcast with 33,000+ followers. Previously represented a Kazakh pharmaceutical company at the Hong Kong International Medical & Healthcare Fair introducing an AI-based diagnostic solution for laryngeal cancer.', image: Picture29, showDetails: false },
          { name: 'Anirban Bandyopadhyay', title: 'Principal Research Scientist, NIMS, Japan; Member, Steering Committee', institution: 'Principal Research Scientist at NIMS, Tsukuba, Japan. Ph.D. from IACS Kolkata (2005). Built an organic jelly-based artificial brain, developed a quantum computer, and invented the Dodecanogram for deep consciousness measurement. Author of "Nanobrain" (2020). Visiting scientist at MIT (2013-2014). 100+ papers, 23 patents, 17 edited books. Hitachi Science and Technology Award (2010).', image: Picture31, showDetails: false },
        ],
        'Invited Talk Speaker': [
          { name: 'Tyler S. Wallace', title: 'Moving from Pilot to Practice: Gen AI Adoption and Training Strategies', institution: 'Ph.D. Leader in AI training and adoption strategies across healthcare, government, and business. Previously Senior Advisor at USAID and director-level role at MD Anderson Cancer Center. Part-time faculty at the University of Georgia\'s College of Public Health.', image: Picture15, showDetails: false },
          { name: "Dr. Haider's", title: 'Application of Big Data Analytics to Predict and Prevent STI Infections among People Living with HIV in Georgia, USA', institution: "Research focuses on theoretically sound, culturally appropriate data-driven interventions to alleviate mental health problems and stigma among historically marginalized populations. Physician by training, Ph.D. in Health Services Policy and Management from USC (2017). Post-doctoral training in Big Data Analytics at USC (2019).", image: Picture16, showDetails: false },
        ],
        'Session Chairs': [
          {
            name: 'Habiba Abdiyeva',
            title: 'PhD Researcher, Department of Software Engineering',
            institution: `PhD researcher at the Department of Software Engineering at Samarkand State University, specializing in medical image analysis and artificial intelligence. Her research focuses on algorithms for segmentation and diagnosis of breast tumor regions based on mammography images under the supervision of Prof. Shavkat Fazilov at the Research Institute for the Development of Digital Technologies and Artificial Intelligence. She has authored around 30 scientific publications in international journals and conference proceedings across the USA, UK, Germany, France, India, Poland, Russia, and Georgia, with 5 papers indexed in Scopus and Web of Science.`,
            image: Picture7,
            showDetails: false
          },
          {
            name: 'Rashidov Akbar',
            title: 'Associate Professor, Department of Artificial Intelligence and Information Systems',
            institution: `Associate Professor at the Department of Artificial Intelligence and Information Systems at Samarkand State University. In 2023, he successfully defended his PhD dissertation on Optimal Data Stream Allocation Algorithms. During his academic career, Akbar Rashidov has authored around 50 scientific publications, including 1 textbook and 1 teaching-methodological manual. He holds intellectual property certificates for approximately 10 software solutions issued by the Intellectual Property Agency. He has also published 9 articles in Scopus and Web of Science indexed journals, including publications in Q1 and Q2 quartile journals.`,
            image: Picture8,
            showDetails: false
          },
          {
            name: 'Yarmatov Sherzodjon',
            title: 'PhD in Technical Sciences, Associate Professor, Head of Department',
            institution: `PhD in Technical Sciences, Associate Professor, and Head of the Department of Artificial Intelligence and Information Systems at Samarkand State University since 2025. He is the author of one textbook, one teaching manual, and three methodological guides. His scientific output includes 10 international and 5 national publications, as well as 9 articles indexed in Scopus and Web of Science. He also holds 5 software registration certificates issued by the State Patent Committee.`,
            image: Picture9,
            showDetails: false
          },
          { name: 'Dr. Touhid Bhuiyan', title: 'Professor & Assistant Director, School of IT, Washington University of Science and Technology, USA', institution: 'Leading cybersecurity expert. Research spans AI, machine learning, cyber security, trust management, big data analytics, health informatics and e-Learning. Ph.D. from Queensland University of Technology. Certified Ethical Hacker with Oxford Cyber Risk certificate. Author of 170+ research publications. Former Director, DIU Cyber Security Centre.', image: Picture19, showDetails: false },
          { name: 'Paul Eliopoulos', title: 'Director, School of IT, Washington University of Science and Technology, USA', institution: '30+ years of international executive experience in change management, business strategy and management consulting. Former CIO of the Metropolitan Police Department, DC. Held executive positions at AT&T, Arthur Andersen, Ernst & Young, and Cambridge Technology Partners. Chartered Fellow of the British Computer Society and Six Sigma Black Belt.', image: Picture20, showDetails: false },
          { name: 'Dr. Necmi Mutlu', title: 'Lead Faculty, School of IT, Washington University of Science and Technology, USA', institution: 'Ph.D. from George Mason University. Over a decade of IT training and cybersecurity consulting experience. Trained and mentored 4,000+ students. Specializes in CompTIA Security+, CEH, and CISSP certifications. Known for hands-on, student-centered teaching and career guidance.', image: Picture21, showDetails: false },
          { name: 'Mahmood Menon Khan', title: 'SOC Lab Coordinator & Assistant Professor, Washington University of Science and Technology, USA', institution: '25+ years of expertise in information systems, secure communication, and data management. Master\'s in Cybersecurity from WUST. Pioneer of digital journalism in Bangladesh, having led digital operations for major Bangladeshi media platforms.', image: Picture22, showDetails: false },
          { name: 'Dr. Maria Lapina', title: 'Associate Professor, Department of Computational Mathematics and Cybernetics, NCFU, Russia', institution: '22+ years of teaching experience. Ph.D. in Mathematics (2005). Research interests include Data Science, Machine Learning, Big Data, Cybersecurity, and Cryptography. 180+ research papers, 86 indexed in Scopus. International internships at Sapienza University of Rome, University of Ljubljana, TU Dresden, and Fudan University. Presidential Grant recipient and Best Lecturer in Russia award.', image: Picture24, showDetails: false },
          { name: 'Dr. Jocelyn Faubert', title: 'Professor, Laboratory of Psychophysics and Visual Perception, University of Montreal', institution: 'NSERC-Essilor Industrial Research Chair in Visual Perception and Presbyopia. Ph.D. in psychology from Concordia University. Research spans aging, vision, glaucoma, neuroplasticity, visual perception, and cognitive performance. Co-founder and Board Member of CogniSens Inc. Internationally recognized expert in psychophysics and applied neuropsychology.', image: Picture33, showDetails: false },
          { name: 'Dr. Kanad Ray', title: 'Director, Amity Cognitive Computing and Brain Informatics Centre; Professor of Physics and Electronics, Amity University Rajasthan, India', institution: 'Ph.D. in Physics from Jadavpur University. 27-year academic career. Research interests include cognition, electromagnetic field theory, antenna & wave propagation, computational biology, and applied physics. Guided 10 Ph.D. scholars. Visiting professor at Universiti Teknologi Malaysia and NIMS Japan. Senior IEEE member and General Chair of the TCCE conference series.', image: Picture39, showDetails: false },
        ],
        'Keynote Speaker': [
          { name: 'Besnik Limaj', title: 'Cybersecurity Component Lead, Team Europe Initiative on Digital Connectivity in Central Asia', institution: '25+ years driving international development and digital security initiatives. Led EU-funded programs including the Cybersecurity East Project for six Eastern Partnership countries, the ENCYSEC transregional EU project, and the Team Europe Initiative C4CA. Global track record spanning Europe, Africa, Asia, and Latin America. MBA from the University of Sheffield.', image: Picture30, showDetails: false },
          { name: 'Dr Sumegh Tharewal', title: 'Associate Professor, DBS Global University; Adjunct Faculty, ICARUS AI E-Learning, California, USA', institution: 'Ph.D. from Dr. Babasaheb Ambedkar Marathwada University. 13+ years in research and academia. Former Postdoctoral Researcher at Free University of Bozen-Bolzano, Italy. Former Program Head of M.Sc. Blockchain Technology at MIT World Peace University, Pune. Expert in AI and Blockchain technology.', image: Picture23, showDetails: false },
          { name: 'Vincent Chang', title: 'International Adviser and Keynote Speaker', institution: 'Global entrepreneur, educator, and academic leader. Currently chairs a U.S.-based hedge fund. Former president of a top university in Bangladesh. Played a key role in establishing a world-renowned business school at Peking University. Previously held roles at Siemens, JP Morgan, McKinsey, ExxonMobil, and the Federal Reserve. Holds PhDs from MIT and UC Berkeley, plus master\'s degrees from Yale, Harvard, and Oxford.', image: Picture17, showDetails: false },
          { name: 'Dr. Munish Sabharwal', title: 'COO & Professor (CSE), Dean Engineering, IILM University; Adjunct Professor AI, Samarkand State University', institution: 'Distinguished academician with 27+ years of experience in higher education, research, and industry. Dual PhDs in Computer Science and Management. Currently pursuing postdoctoral research in AI-based non-invasive health diagnostics at Singapore Institute of Technology.', image: Picture32, showDetails: false },
        ],
        'Invited Speakers': [
          { name: 'Prof. Dr. Yusuf Celik, PhD', title: 'Professor, Department of Healthcare Management, Acibadem University, Turkiye', institution: 'Bachelor\'s from Hacettepe University (1990); MSc and PhD in Healthcare Management from the same university. Research fellow at Tulane University School of Public Health (1996-1998). Further studies in health economics at University of South Carolina (2015-2016). 30+ years teaching and researching Healthcare Management, with consultancy for World Bank, EU, and OIC-funded projects.', image: Picture34, showDetails: false },
          { name: 'Professor Changle Li, PhD', title: 'Associate Professor, Fujian Medical University; Adjunct Associate Professor, University of Georgia, USA', institution: 'Ph.D. in Economics with postdoctoral fellowship in Health Policy and Management. Research interests include health economics, health insurance systems, health policy, and health risk behaviors. 40+ academic papers, 20+ research projects. Reviewer for 30+ SCI/SSCI journals including Tobacco Control and Journal of Medical Internet Research.', image: Picture35, showDetails: false },
          { name: 'Dr. Abdulmalik Alhammad, MBA, PhD', title: 'Head of Healthcare, AlUla, Saudi Arabia', institution: 'Leads strategic development of healthcare services in AlUla aligned with Saudi Arabia\'s Vision 2030. Former senior leadership roles at King Faisal Specialist Hospital & Research Center. Holds a Bachelor\'s in Pharmacy, MBA, and PhD. Fellow of Houston Methodist Hospital. Completed General Management Program at Harvard Business School (2024).', image: Picture36, showDetails: false },
          { name: 'Dr. Lili Kang, PhD', title: 'Associate Professor, School of Health Management, Fujian Medical University, China', institution: 'PhD in Public Administration. 20+ academic papers, 10+ research projects. Academic interests include health policy evaluation, primary-level medical and health system development, and healthy aging. Actively engaged in research and teaching in healthcare management, public policy evaluation, and hospital management.', image: Picture37, showDetails: false },
          { name: 'Professor M. Mahmud Khan', title: 'Head and Professor, Department of Health Policy and Management, University of Georgia, USA', institution: 'Applied economist with expertise in health economics, economic evaluation, disparities in healthcare utilization, maternal and child health, and large-scale health sector surveys. 30+ years of research on healthcare costs and health systems design. 120+ peer-reviewed articles. Supervised 55+ doctoral students. Lectured in around 50 countries worldwide.', image: Picture38, showDetails: false },
          { name: 'Dr. Zhuo (Adam) Chen', title: 'Professor and DrPH Program Coordinator, Department of Health Policy and Management, University of Georgia, USA', institution: 'Ph.D. in Economics and M.S. in Statistics from Iowa State University. 100+ peer-reviewed papers in Lancet, Journal of Health Economics, and Social Science & Medicine. Former senior health economist at CDC; CDC Excellence in Social and Behavioral Science Research Award (2013). Research covers health economics, social determinants, global health, mental health, genomics, and economic evaluation.', image: Picture40, showDetails: false },
          { name: 'Dr. Aswani Kumar Cherukuri', title: 'Professor (Higher Academic Grade), VIT, Vellore, India', institution: '24+ years of academic and research experience in machine learning, information security, and quantum computing. 200+ research papers, 5100+ citations, h-index of 34. Led multiple research projects funded by national agencies. Young Scientist Fellowship from Tamil Nadu SCST. Senior Member of IEEE and ACM, Vice Chair of IEEE Educational Taskforce on Data Mining.', image: Picture41, showDetails: false },
        ],
      },
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');

.people-section {
  background: #f8faff;
  padding: 5rem 0 6rem;
}

.people-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.eyebrow {
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.5rem;
}

.section-title {
  font-family: 'Crimson Pro', serif;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.6rem;
  line-height: 1.15;
}

.section-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: #64748b;
  max-width: 520px;
  margin: 0 auto;
}

.role-block {
  margin-bottom: 4rem;
}

.role-heading-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.role-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #cbd5e1);
}

.role-heading-row:first-child .role-line:last-child {
  background: linear-gradient(90deg, #cbd5e1, transparent);
}

.role-line:last-child {
  background: linear-gradient(90deg, #cbd5e1, transparent);
}

.role-heading {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #2563eb;
  white-space: nowrap;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  padding: 5px 16px;
  border-radius: 100px;
}

.tba-card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  background: #fff;
  border: 1px dashed #cbd5e1;
  border-radius: 16px;
}

.tba-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: #94a3b8;
  font-style: italic;
}

.people-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 700px) {
  .people-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.person-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.22s, transform 0.22s;
}

.person-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.09);
  transform: translateY(-2px);
}

.card-top {
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem;
  align-items: flex-start;
}

.person-image-wrap {
  flex-shrink: 0;
}

.person-image {
  width: 96px;
  height: 112px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  display: block;
}

@media (min-width: 480px) {
  .person-image {
    width: 110px;
    height: 130px;
  }
}

.person-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.person-name {
  font-family: 'Crimson Pro', serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.2;
}

.person-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.5;
  font-style: italic;
}

.toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 0.5rem;
  padding: 5px 14px;
  border-radius: 100px;
  border: 1px solid #2563eb;
  background: transparent;
  color: #2563eb;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  transition: background 0.18s, color 0.18s;
}

.toggle-btn:hover,
.toggle-btn.open {
  background: #2563eb;
  color: #fff;
}

.toggle-icon {
  width: 13px;
  height: 13px;
}

.bio-wrap {
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.3s ease;
}

.bio-inner {
  padding: 0 1.5rem 1.25rem;
  border-top: 1px solid #f1f5f9;
  padding-top: 1rem;
}

.bio-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: #475569;
  line-height: 1.75;
  white-space: pre-line;
}
</style>


