<template>
  <section class="tracks-section">
    <div class="tracks-inner">
      <div class="section-header">
        <span class="eyebrow">Research Areas</span>
        <h2 class="section-title">Tracks & Topics</h2>
        <p class="section-desc">Five focused research tracks spanning AI, healthcare, electronics, IoT, and cybersecurity</p>
      </div>

      <div class="tracks-grid">
        <div
          v-for="(track, index) in tracks"
          :key="index"
          class="track-card"
          :style="{ '--accent': track.accent }"
        >
          <div class="card-header">
            <div class="track-icon">
              <img :src="track.image" :alt="track.subtitle" />
            </div>
            <div class="track-meta">
              <span class="track-number">{{ track.title }}</span>
              <h3 class="track-title">{{ track.subtitle }}</h3>
            </div>
          </div>

          <div class="divider" />

          <ul class="topic-list">
            <li v-for="(topic, i) in track.topics" :key="i" class="topic-item">
              <span class="topic-dot" />
              {{ topic }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { publicAsset } from '@/utils/publicAsset'

export default {
  name: 'TracksView',
  data() {
    return {
      tracks: [
        {
          image: publicAsset('images/brain.jpg'),
          title: 'Track 1',
          subtitle: 'Artificial Intelligence and Soft Computing',
          accent: '#2563eb',
          topics: [
            'Shallow Machine Learning',
            'Artificial Intelligence',
            'Deep Learning Neural Networks',
            'Natural Language Processing',
            'Intelligent Control',
            'Predictive Analytics',
            'Data Mining and Information Retrieval',
            'Quantum Computing',
            'Fuzzy Logic and Data Mining',
            'Cloud Computing',
            'Mathematical Modeling, Numerical Methods and Program Complexes',
          ],
        },
        {
          image: publicAsset('images/heartpulse.png'),
          title: 'Track 2',
          subtitle: 'Healthcare Informatics',
          accent: '#dc2626',
          topics: [
            'Biomedical and Biomolecular Computation',
            '2D and 3D Bioprinting Healthcare Informatics',
            'Nano-Medicine and Their Implementations',
            'Cognitive Psychology and Neuroscience',
            'Bioinformatics and Neuroinformatics',
            'Brain Informatics and Health Informatics',
            'Computational Biology and Computational Neuroscience',
            'Integrating Wearable Devices for Patient Care',
            'Cybersecurity Concerns with Electronic Medical Records',
            'Human-Robot Interfaces and Interactions for Healthcare',
            'Mobile Computing for Digital Healthcare',
          ],
        },
        {
          image: publicAsset('images/server.jpg'),
          title: 'Track 3',
          subtitle: 'IoT and Data Analytics',
          accent: '#059669',
          topics: [
            'Body Area Networks',
            'Antenna Theory and Techniques for Healthcare',
            'Sensor-Based Technology for Healthcare',
            'Healthcare Big Data Analytics',
            'IoT for Smart Healthcare Applications',
            'Augmented and Virtual Reality in Healthcare',
            'Analytical Trends in Digital Health Records',
            'Analog and Digital Signal Processing for Healthcare',
            'Remote Signal Analysis and Big Data Management',
            'Computer Vision for Biosignal and Bioimage Interpretation',
            'Healthcare IoT for Healthcare 4.0/5.0 Systems',
          ],
        },
        {
          image: publicAsset('images/cpu.png'),
          title: 'Track 4',
          subtitle: 'Electronics',
          accent: '#7c3aed',
          topics: [
            'Context-Aware Pervasive Systems for Healthcare',
            'Hybrid Intelligent Systems for Healthcare',
            'Digitization of Healthcare Enterprises and Systems',
            'Wireless Sensor Networks for Healthcare',
            'High Reliability and Low Latency Communications',
            'Machine Learning and AI in Biomedical Equipment',
            'Biomedical and Sensor Instrumentations',
            'Robotic and Automation for Healthcare',
            'Cyber-Physical Systems for Healthcare',
            'Flexible, Wearable and Implantable Biomedical Devices',
            'Blockchain in Healthcare Applications',
            'Ubiquitous Network and Computing including 5G/6G',
          ],
        },
        {
          image: publicAsset('images/shield.jpg'),
          title: 'Track 5',
          subtitle: 'Cybersecurity',
          accent: '#d97706',
          topics: [
            'Healthcare Cybersecurity',
            'Data Privacy for Medical Records',
            'Encryption for Healthcare IoT',
            'Threat Detection and Mitigation in Healthcare Systems',
            'Security of Wearable and Implantable Devices',
            'Risk Management in Digital Health',
            'Cyber-Physical Systems Protection',
            'Blockchain for Health Data Security',
            'Authentication and Authorization in Healthcare Systems',
            'Regulatory Compliance in Health Information Security',
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap');

.tracks-section {
  background: #f8faff;
  padding: 5rem 0 6rem;
}

.tracks-inner {
  max-width: 1200px;
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
  margin-bottom: 0.6rem;
}

.section-title {
  font-family: 'Crimson Pro', serif;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.75rem;
  line-height: 1.15;
}

.section-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: #64748b;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.6;
}

.tracks-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 700px) {
  .tracks-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1100px) {
  .tracks-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .track-card:last-child:nth-child(odd) {
    grid-column: 1 / -1;
    max-width: 580px;
    justify-self: center;
  }
}

.track-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-top: 4px solid var(--accent);
  border-radius: 18px;
  padding: 1.75rem 1.75rem 2rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.25s, transform 0.25s;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.track-card:hover {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transform: translateY(-3px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.track-icon {
  width: 60px;
  height: 60px;
  border-radius: 14px;
  overflow: hidden;
  flex-shrink: 0;
  background: color-mix(in srgb, var(--accent) 10%, #fff);
  border: 2px solid color-mix(in srgb, var(--accent) 20%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
}

.track-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.track-meta {
  flex: 1;
}

.track-number {
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 10%, #fff);
  border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
  padding: 2px 10px;
  border-radius: 100px;
  margin-bottom: 5px;
}

.track-title {
  font-family: 'Crimson Pro', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.25;
}

.divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.06);
  margin-bottom: 1.25rem;
}

.topic-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.topic-item {
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #475569;
  line-height: 1.5;
}

.topic-dot {
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.6;
  margin-top: 5px;
}
</style>
