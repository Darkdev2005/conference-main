<template>
  <section class="committee-section">
    <div class="committee-inner">
      <div class="section-header">
        <span class="eyebrow">Conference Leadership</span>
        <h1 class="section-title">Committee</h1>
        <p class="section-desc">Organizing and technical programme committee members from institutions worldwide</p>
      </div>

      <div class="committee-grid">
        <div
          v-for="section in sections"
          :key="section.key"
          class="committee-card"
          :class="{ 'card-wide': section.items.length > 10 }"
        >
          <div class="card-title-row">
            <span class="card-icon" :style="{ background: roleColor(section.key) }">
              {{ roleInitial(section.title) }}
            </span>
            <h2 class="card-title">{{ section.title }}</h2>
          </div>

          <ul class="member-list">
            <li v-for="item in section.items" :key="item" class="member-item">
              <span class="member-dot" :style="{ background: roleColor(section.key) }" />
              <span class="member-text">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const ROLE_COLORS = {
  patrons: '#7c3aed',
  steeringCommittee: '#2563eb',
  internationalAdvisory: '#0891b2',
  nationalAdvisory: '#0f766e',
  generalChair: '#059669',
  programmeChairs: '#16a34a',
  conferenceSecretary: '#ca8a04',
  localOrganisingChairs: '#d97706',
  workshopChairs: '#ea580c',
  tutorialChairs: '#dc2626',
  publicationChairs: '#db2777',
  publicityChairs: '#9333ea',
  financeChairs: '#2563eb',
  registrationChairs: '#0891b2',
  webmaster: '#059669',
  technicalProgramChairs: '#7c3aed',
  tpcMembers: '#1d4ed8',
  tpcorganizing: '#6d28d9',
}

export default {
  name: 'CommitteeView',
  methods: {
    roleColor(key) {
      return ROLE_COLORS[key] || '#2563eb'
    },
    roleInitial(title) {
      return title.trim().charAt(0).toUpperCase()
    },
  },
  data() {
    return {
      sections: [
        {
          key: 'patrons',
          title: 'Patrons',
          items: [
            'Dr. Rustam Kholmurodov, Rector of Samarkand State University, Samarkand, Uzbekistan',
            'Dr. Akmal Rustamovich, Vice-Rector of Samarkand State University, Samarkand, Uzbekistan',
          ],
        },
        {
          key: 'steeringCommittee',
          title: 'Steering Committee',
          items: [
            'Dr. Anirban Bandyopadhyay, NIMS, Japan',
            'Dr. Kanad Ray, Amity University, Jaipur',
            'Dr. J E Lugo, University of Montreal, Canada',
            'Dr. Subrata Ghosh, CSIR Northeast Institute of Sc. & Tech., Jorhat',
            'Dr. Chi-Sang Poon, MIT, USA',
            'Dr. Jocelyn Faubert, University of Montreal, Canada',
            'Dr. Sazzad Hossain, Samarkand State University, Uzbekistan',
            'Dr. Mufti Mahmud, Nottingham Trent University, UK',
            'Dr. Shamim Al Mamun, Jahangirnagar University, Bangladesh',
            'Dr. M Shamim Kaiser, Jahangirnagar University, Bangladesh',
          ],
        },
        {
          key: 'internationalAdvisory',
          title: 'International Advisory Committee',
          items: [
            'Dr. M. Mahmud Khan, Health Policy & Management, Department Head & Professor, John A. Drew Professor in Healthcare Administration, University of Georgia, USA',
            'Dr. Karl Andersson, Professor and Head of Subject, Dean, Luleå University of Technology, Sweden',
            'Dr. Azizur Rahman, FIEEE, City University London, UK',
            'Dr. Abdul Halim ZAIM, ITU, Turkey',
            'Dr. Md. Atiqur Rahman Ahad, OU, Japan',
            'Dr. Md. Abdur Razzaque, CSE, DU',
            'Dr. M. Sohel Rahman, CSE, BUET',
            'Dr. Md. Saidur Rahman, CSE, BUET',
            'Dr. Joarder Kamruzzaman, SoSEIT - Federation University, Australia',
            'Dr. M. Nasim Akhter, CSE, DUET',
            'Dr. Md. Roshidul Hasan, CS&IT, BSMRAU',
            'Dr. Md. Obaidur Rahman, IICT, DUET',
            'Dr. M. Mahbubur Rahman, CSIT, IU',
            'Dr. Alamgir Hossain, Teesside University, UK',
            'Dr. Ayman Alfalou, University of Brittany, France',
            'Dr. Ekram Hossain, University of Manitoba, Canada',
            'Dr. Latifur Khan, University of Texas, USA',
            'Dr. M Ashraful Alam, Purdue University, USA',
            'Dr. Mohammad S. Alam, Texas A&M University, USA',
            'Dr. Mustafizur Rahman, Intel Co, USA',
            'Dr. M Zahid Hasan, Princeton University',
            'Dr. N Kishi, University of Electro-communication, Japan',
            'Dr. Ramjee Prasad. Aarhus University, Denmark',
            'Dr. Ranjan Gangopadhy, LNMIIT, India',
            'Dr. Saifur Rahman, Virginia Tech, USA',
            'Dr. Satya Prashad Mazumder, EEE, BUET',
            'Dr. Subrata Kubar Aditya, EEE, DU',
            'Dr. Syed Ishtiaque Ahmed, University of Toronto, Canada',
            'Dr. Taher Saif, Stanford University, USA',
            'Dr. Vijayan Asari, University of Dayton, USA',
            'Dr. Yoshinori Kuno, SU, Japan',
            'Dr. Yoshinori Kobayashi, SU, Japan',
          ],
        },
        {
          key: 'nationalAdvisory',
          title: 'National Advisory Committee',
          items: [],
        },
        {
          key: 'generalChair',
          title: 'General Chairs',
          items: [
            'Dr. Nazarov Fayzullo Makhmadiyarovich, Samarkand State University, Uzbekistan',
            'Dr. Kanad Ray, Amity University Rajasthan, India',
          ],
        },
        {
          key: 'programmeChairs',
          title: 'Programme Chairs',
          items: [
            'Dr. Sazzad Hossain, Samarkand State University, Uzbekistan',
            'Dr. Mufti Mahmud, Nottingham Trent University, UK',
          ],
        },
        {
          key: 'conferenceSecretary',
          title: 'Conference Secretary',
          items: [
            'Dr. M Shamim Kaiser, Jahangirnagar University, Bangladesh',
            'Hamidov Munis, Samarkand State University, Uzbekistan',
            'Bobokhonov Ahmadkhan, Samarkand State University, Uzbekistan',
          ],
        },
        {
          key: 'localOrganisingChairs',
          title: 'Local Organising Chairs',
          items: [
            'Dr. Nurmamatov Mekhriddin, Samarkand State University, Uzbekistan',
          ],
        },
        {
          key: 'workshopChairs',
          title: 'Workshop / Special Session Chairs',
          items: [
            'Dr. V.N. Manjunath Aradhya, JSS University, India',
            'Dr. Rashidov Akbar, Samarkand, Uzbekistan',
          ],
        },
        {
          key: 'tutorialChairs',
          title: 'Tutorial Chairs',
          items: [
            'Dr. Tanu Wadhera, Indian Institute of Information Technology Una, India',
          ],
        },
        {
          key: 'publicationChairs',
          title: 'Publication Chairs',
          items: [
            'Dr. Sazzad Hossain, Samarkand State University, Uzbekistan',
            'Dr. Anirban Bandyopadhyay, NIMS, Japan',
            'Dr. Kanad Ray, Amity University Rajasthan, India',
            'Dr. M Shamim Kaiser, JU, Bangladesh',
            'Dr. Nurmamatov Mekhriddin, Samarkand State University, Uzbekistan',
            'Dr. Mufti Mahmud, Nottingham Trent University, UK',
          ],
        },
        {
          key: 'publicityChairs',
          title: 'Publicity Chairs',
          items: [
            'Dr. Noushath Shaffi, Sultan Qaboos University, Oman',
            'Dr. M Mostafizur Rahman, American International University Bangladesh, Bangladesh',
            'Dr. Tursinkhanov Nurlan, Samarkand State University, Samarkand, Uzbekistan',
            'Dr. Touhid Bhuiyan, Assistant Director, School of IT, Washington University of Science and Technology, USA',
          ],
        },
        {
          key: 'financeChairs',
          title: 'Finance Chairs',
          items: [
            'Dr. Yarmatov Sherzojon, Samarkand State University, Uzbekistan',
            'Dr. Khuramov Latif, Samarkand State University, Uzbekistan',
          ],
        },
        {
          key: 'registrationChairs',
          title: 'Registration Chairs',
          items: [
            'Rabbimov Nodir, Samarkand State University, Uzbekistan',
            'Bobokhonov Ahmadkhan, Samarkand State University, Uzbekistan',
          ],
        },
        {
          key: 'webmaster',
          title: 'Webmaster',
          items: [
            'Asliddin Sayidkulov, Samarkand State University, Uzbekistan',
          ],
        },
        {
          key: 'technicalProgramChairs',
          title: 'Technical Program Chairs',
          items: [
            'Dr. Anirban Bandyopadhyay, NIMS, Japan',
            'Dr. Sandeep Gupta, Poornima College of Engineering, Jaipur, India',
          ],
        },
        {
          key: 'tpcMembers',
          title: 'Technical Programme Committee Members',
          items: [
            'Dr. A. K. M. Fazlul Haque, DIU, Bangladesh',
            'Dr. Abraham N. Meza-Rocha, FCFM-BUAP, Mexico',
            'Dr. Aldo Yair Tenorio-Barajas, FCFM-BUAP, Mexico',
            'Dr. Alexandra Deriabina, FCFM-BUAP, Mexico',
            'Dr. Ángel Daniel Santana-Vargas, HGEL-RD, Mexico',
            'Dr. Anita Garhwal, Sweden',
            'Dr. Antesar Ramadan M. Shabut, Leeds Trinity University, UK',
            'Dr. Areli Montes-Pérez, FCFM-BUAP, Mexico',
            'Dr. Argelia Pérez Pacheco, HGEL-UIyDT, Mexico',
            'Dr. Aron Laszka, University of Houston, USA',
            'Dr. Arumona Edward Arumona, TDTU, Vietnam',
            'Dr. Benito de Celis-Alonso, FCFM-BUAP, Mexico',
            'Dr. C. Mendoza-Barrera, FCFM-BUAP, Mexico',
            'Dr. Chee-Ming Ting, UTM, Malaysia',
            'Dr. Eduardo Moreno-Barbosa, FCFM-BUAP, Mexico',
            'Dr. Efrain Rubio-Rosas, DITCO-BUAP, Mexico',
            'Dr. Elena Hernandez-Caballero, FM-BUAP, Mexico',
            'Esra Gov, Adana Alparslan Turkes Science and Technology University, Turkey',
            'Farhana Sarker, University of Liberal Arts, Bangladesh',
            'Fida Hasan, RMIT University, Australia',
            'Hadri Hussain, UTM, Malaysia',
            'Hussain Nyeem, MIST, Bangladesh',
            'Irais Bautista-Guzmán, FCFM-BUAP, Mexico',
            'Jose J. Gervacio-Arciniega, FCFM-BUAP, Mexico',
            'Kashayar Misaghian, Okinawa Institute of Science and Technology, Japan',
            'M. Murugappan, Kuwait College of Science and Technology, Kuwait',
            'M. Toledo-Solano, FCFM-BUAP, Mexico',
            'Marcos Faundez-Zanuy, Escola Superior Politécnica Tecnocampus, Spain',
            'Maria Isabel Pedraza-Morales, FCFM-BUAP, Mexico',
            'Martha A. Palomino-Ovando, FCFM-BUAP, Mexico',
            'Marzia Hoque Tania, University of Oxford, UK',
            'Md. Abu Yousuf, JU, Bangladesh',
            'Md. Sazzadur Rahman, JU, Bangladesh',
            'Md. Wahiduzzaman, UNSW, AUS',
            'Md. Abdul Alim, Khulna University, Bangladesh',
            'Md. Abu Layek, Jagannath University, Bangladesh',
            'Mehdi Sookhak, Texas A&M University-Corpus Christi, USA',
            'Mohammad Ali Moni, University of Queensland, Australia',
            'Mohammad Sajjad Ghaemi, NRC-Fields Mathematical Sciences Collaboration Centre, Canada',
            'Mohammad Shamsul Arefin, CUET, Bangladesh',
            'Muhammad Arif Jalil, UTM, Malaysia',
            'Muhammad Golam Kibria, University of Liberal Arts, Bangladesh',
            'Muhammad Nazrul Islam, MIST, Bangladesh',
            'Nabeel Mohammed, North South University, Bangladesh',
            'Nasima Begum, University of Asia Pacific, Bangladesh',
            'Pushpendra Singh, NIMS, Japan',
            'Rashed Majumder, JU, Bangladesh',
            'Rubén Conde Sánchez, FCFM-BUAP, Mexico',
            'Severino Muñoz-Aguirre, IF-BUAP, Mexico',
            'Shariful Islam, Deakin University, Australia',
            'Sheikh Hussain Shaikh Salleh, Heal Ultra PLT, Malaysia',
            'Tianhua Chen, University of Huddersfield, UK',
          ],
        },
        {
          key: 'tpcorganizing',
          title: 'Organising Committee',
          items: [
            'Khalmuradov Rustam Ibragimovich - Professor, Doctor of Technical Sciences, Uzbekistan.',
            'Komilov Mirzayan - Academician, Professor, Doctor of Technical Sciences, Uzbekistan.',
            'Munish Sabharwal - Professor, Doctor of Technical Sciences, India.',
            'Arvind Dagur - Professor, Doctor of Technical Sciences, India.',
            'Ashwini Renavekar - Professor, Doctor of Engineering Sciences, India.',
            'Jumanov Israil - Professor, Doctor of Technical Sciences, Uzbekistan.',
            'Aripov Mirsaid - Professor, Doctor of Physics and Mathematics, Uzbekistan.',
            'Kazuya Takeda - Professor, Nagoya University, Japan.',
            'Byung-Gon Chun - Professor, Seoul National University, South Korea.',
            'Zhuk Alexander - Professor, Doctor of Technical Sciences, Russia.',
            'Mikhail Babenko - Professor, Doctor of Technical Sciences, Russia.',
            'Jordi Alberich Pascual - Professor, University of Granada, Spain.',
            'Sevinc Gulsecen - Professor, Istanbul University, Turkey.',
            'Khujayorov Bakhtiyor - Professor, Doctor of Physics and Mathematics, Uzbekistan.',
            'Urunbayev Erkin - Professor, Doctor of Physics and Mathematics, Uzbekistan.',
            'Akhatov Akmal - Professor, Doctor of Technical Sciences, Uzbekistan.',
            'Fozilov Shavkat - Professor, Doctor of Technical Sciences, Uzbekistan.',
            'Hamdamov Rustam - Professor, Doctor of Technical Sciences, Uzbekistan.',
            'Ravshanov Normakhmat - Professor, Doctor of Technical Sciences, Uzbekistan.',
            'Lutfullayev Makhmud - Professor, Doctor of Pedagogical Sciences, Uzbekistan.',
            'Babomuradov Ozod - Professor, Doctor of Technical Sciences, Uzbekistan.',
            'Mamatov Narzullo - Professor, Doctor of Technical Sciences, Uzbekistan.',
            'Primova Kholida - Professor, Doctor of Technical Sciences, Uzbekistan.',
            'Radjabov Sobirjon - Professor, Doctor of Technical Sciences, Uzbekistan.',
            'Nazarov Fayzullo - Associate Professor, Doctor of Philosophy in Technical Sciences, Uzbekistan.',
            'Yusupov Ozod - Associate Professor, Doctor of Philosophy in Technical Sciences, Uzbekistan.',
            'Shodiyev Usman - Associate Professor, Doctor of Philosophy in Physics and Mathematics, Uzbekistan.',
            'Mardonov Dilmurod - Associate Professor, Doctor of Philosophy in Technical Sciences, Uzbekistan.',
            'Fayziyev Bekzodjon - Associate Professor, Doctor of Philosophy in Technical Sciences, Uzbekistan.',
            'Jabbarov Jamoliddin - Associate Professor, Doctor of Philosophy in Technical Sciences, Uzbekistan.',
            'Yarmatov Sherzodjon - Assistant, Researcher, Uzbekistan.',
            'Abdiyeva Khabiba - Assistant, Researcher, Uzbekistan.',
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap');

.committee-section {
  background: #f8faff;
  padding: 5rem 0 6rem;
}

.committee-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
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

.committee-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .committee-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .committee-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card-wide {
  grid-column: 1 / -1;
}

.committee-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 18px;
  padding: 1.5rem 1.5rem 1.75rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.22s, transform 0.22s;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.committee-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.09);
  transform: translateY(-2px);
}

.card-title-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.card-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Crimson Pro', serif;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
}

.card-title {
  font-family: 'Crimson Pro', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.25;
}

.member-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.card-wide .member-list {
  columns: 2;
  gap: 0.35rem;
}

@media (min-width: 900px) {
  .card-wide .member-list {
    columns: 3;
  }
}

.member-item {
  display: flex;
  align-items: baseline;
  gap: 7px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: #475569;
  line-height: 1.5;
  break-inside: avoid;
}

.member-dot {
  flex-shrink: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  opacity: 0.55;
  margin-top: 6px;
}

.member-text {
  flex: 1;
}
</style>
