<template>
  <section class="tracks-section">
    <div class="tracks-inner">
      <div class="section-header">
        <span class="eyebrow">Research Areas</span>
        <h2 class="section-title">Tracks & Topics</h2>
        <p class="section-desc">Six focused tracks spanning AI, cognitive science, quantum systems, modeling, signal processing, and cyber security</p>
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

          <p class="scope-text">{{ track.scope }}</p>
          <p class="topics-label">Representative topics:</p>

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
          subtitle: 'Artificial Intelligence and Data Analytics',
          scope: 'Scope: Research and applications combining AI methods and large-scale data analytics to extract insight, automate decisions, and deploy intelligent systems across industry and science. Emphasis on scalable algorithms, ethical/robust deployment, interpretability, and real-world evaluation.',
          accent: '#2563eb',
          topics: [
            'Machine learning (supervised, unsupervised, self-/semi-supervised)',
            'Deep learning architectures and applications',
            'Shallow/ensemble methods and feature engineering',
            'Bayesian learning and probabilistic models',
            'Data mining, knowledge discovery, and pattern mining',
            'Explainable AI, model interpretability, and fairness',
            'Scalable analytics, distributed/stream processing, and big data systems',
            'Anomaly detection & intrusion detection in data streams',
            'Hybrid intelligence (neuro-symbolic, human-in-the-loop)',
            'Time-series forecasting and predictive analytics',
            'Context-aware/personalized systems and recommender systems',
            'AI for industry 4.0, IoT analytics, and edge intelligence',
            'Evaluation metrics, reproducibility, and benchmarking',
          ],
        },
        {
          image: publicAsset('images/heartpulse.png'),
          title: 'Track 2',
          subtitle: 'Cognitive Science and Computational Biology',
          scope: 'Scope: Interdisciplinary work connecting cognition, neuroscience, and computational biology - modeling brain and behavior, bioinformatic methods for molecular/clinical data, and computational approaches to health and cognition.',
          accent: '#dc2626',
          topics: [
            'Cognitive psychology, computational models of cognition, and behavior modeling',
            'Systems and cognitive neuroscience; brain connectivity and imaging analysis',
            'Bioinformatics: genomics, proteomics, sequence/structure analysis',
            'Brain informatics, neural data analytics, and brain-computer interfaces',
            'Computational biology: modeling biological systems and networks',
            'Health informatics, clinical data analytics, and digital phenotyping',
            'Neuro-symbolic models for cognition and learning',
            'Cognitive architectures, memory/attention models, and language processing',
            'Machine learning for biomedical data and biomarker discovery',
            'Neurodegenerative disease modeling and computational psychiatry',
            'Ethical, privacy, and translational issues in neuro/health data',
          ],
        },
        {
          image: publicAsset('images/server.jpg'),
          title: 'Track 3',
          subtitle: 'Quantum Algorithms and Electronics',
          scope: 'Scope: Advances in quantum computing theory, algorithms, and quantum-enabled electronics, plus classical-quantum hybrid architectures and hardware/software co-design for quantum information processing.',
          accent: '#059669',
          topics: [
            'Quantum algorithms (simulation, optimization, sampling, cryptanalysis)',
            'Quantum complexity theory and algorithmic foundations',
            'Quantum error correction, fault tolerance, and noise mitigation',
            'Quantum-classical hybrid methods and variational algorithms (VQE, QAOA)',
            'Quantum circuits, compilation, and resource estimation',
            'Quantum hardware: superconducting, trapped ions, photonic, spin qubits',
            'Quantum electronics, control systems, and cryogenic electronics',
            'Quantum communications, networking, and cryptography',
            'Quantum benchmarking, verification, and validation',
            'Materials and device engineering for qubits',
            'Applications: quantum chemistry, materials simulation, machine learning',
            'Co-design of algorithms and hardware; performance/energy tradeoffs',
          ],
        },
        {
          image: publicAsset('images/cpu.png'),
          title: 'Track 4',
          subtitle: 'Mathematical and Computer Modeling',
          scope: 'Scope: Theoretical and applied modeling using mathematical methods and computational simulation to understand, predict, and control complex systems in engineering, natural sciences, and social systems.',
          accent: '#7c3aed',
          topics: [
            'Mathematical modeling of dynamical systems, nonlinear systems, and chaos',
            'Numerical analysis, scientific computing, and high-performance simulation',
            'Partial differential equations, finite element/volume methods',
            'Stochastic modeling, probabilistic methods, and uncertainty quantification',
            'Multi-scale and multi-physics modeling, coupled systems',
            'Optimization, control theory, and inverse problems',
            'Agent-based models, network models, and complex systems analysis',
            'Model reduction, surrogate modeling, and emulation',
            'Computational epidemiology, environmental and ecological modeling',
            'Data-driven modeling, system identification, and model calibration',
            'Verification, validation, and reproducibility in simulations',
            'Applications to engineering design, finance, and social sciences',
          ],
        },
        {
          image: publicAsset('images/shield.jpg'),
          title: 'Track 5',
          subtitle: 'Signal Processing, Computer Vision & Engineering',
          scope: 'Scope: Theory, algorithms, and applications in signal processing, computer vision, and related engineering disciplines, covering sensing, perception, real-time processing, and systems integration.',
          accent: '#d97706',
          topics: [
            'Image and video processing, recognition, and understanding',
            'Computer vision: object detection, tracking, segmentation, 3D vision',
            'Machine learning for vision and signal processing',
            'Signal processing theory, filter design, and spectral analysis',
            'Sensor systems, sensor fusion, and data acquisition',
            'Robotics perception and autonomy; SLAM and navigation',
            'Virtual, augmented, and mixed reality systems',
            'Wireless communication signal processing and antenna design',
            'Embedded/VLSI implementations for vision and signal algorithms',
            'Audio/speech processing, biometrics, and pattern recognition',
            'AI-based signal timing and cyber-physical sensor networks',
            'Real-time systems, low-latency inference, and edge deployment',
          ],
        },
        {
          image: publicAsset('images/shield.jpg'),
          title: 'Track 6',
          subtitle: 'Information Systems Architecture and Cyber Security',
          scope: 'Scope: This session examines critical dimensions of the modern digital landscape, with a focus on safeguarding systems, networks, and data against evolving cyber threats. It brings together perspectives from information systems architecture and cybersecurity to address design, resilience, and risk management challenges.',
          accent: '#0f766e',
          topics: [
            'Secure software development and secure software life cycle management',
            'Software defined network protocols',
            'Network security',
            'SDN security and privacy',
            'Software testing and quality assurance',
            'Cloud security',
            'Hybrid cloud infrastructure for IoT',
            'Data protection and privacy',
            'Security and risk assessment and penetration testing',
            'SOC, threat hunting and incident response',
            'Malware analysis and reverse engineering',
            'AI applications in cybersecurity',
            'Cybersecurity regulations, compliance and governance',
            'Secure software development and DevSecOps',
            'Operating systems security',
            'Cryptography',
            'Information systems architecture',
            'AI and cybersecurity in fintech and regtech',
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
  margin-bottom: 0.9rem;
}

.scope-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.84rem;
  color: #64748b;
  line-height: 1.55;
  margin: 0 0 1rem;
}

.topics-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #334155;
  margin: 0 0 0.65rem;
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
