import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CommitteeView from '../views/CommitteeView.vue'
import BudgetView from '@/views/BudgetView.vue'
import PaperReview from '@/views/PaperReview.vue'
import ExpectedBudgetView from '@/views/ExpectedBudgetView.vue'
import RegisterView from '@/views/RegisterView.vue'
import HotelsView from '@/views/HotelsView.vue'
import AddressesView from '@/views/AddressesView.vue'
import PartnersView from '@/views/PartnersView.vue'
import PaperView from '@/views/PaperView.vue'
import UniversityView from '@/views/UniversityView.vue'
import SessionsView from '@/views/SessionsView.vue'
import PaymentView from '@/views/PaymentView.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'
import Gallery from '@/components/Gallery.vue'
import NotFound from '@/components/NotFound.vue'
import YoutubeVideosView from '@/views/YoutubeVideosView.vue'
import CertificateAuthors from '@/components/CertificateAuthors.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
    },
    {
      path: '/certificate-authors',
      name: 'certificate-authors',
      component: CertificateAuthors,
    },
    {
      path: '/register-form',
      name: 'register-form',
      component: RegistrationForm,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tracks',
      name: 'tracks',
      component: () => import('../views/TracksTopics.vue'),
    },
    {
      path: '/committee',
      name: 'committee',
      component: CommitteeView,
    },
    {
      path: '/session',
      name: 'session',
      component: SessionsView,
    },
    {
      path: '/budget',
      name: 'budget',
      component: BudgetView,
    },
    {
      path: '/paper-review',
      name: 'paper-review',
      component: PaperReview,
    },

    {
      path: '/summary',
      name: 'summary',
      component: ExpectedBudgetView,
    },

    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },

    {
      path: '/hotels',
      name: 'hotels',
      component: HotelsView
    },
    {
      path: '/addresses',
      name: 'addresses',
      component: AddressesView
    },
    {
      path: '/partners',
      name: 'partners',
      component: PartnersView
    },
    {
      path: '/paper',
      name: 'paper',
      component: PaperView
    },
    {
      path: '/university',
      name: 'university',
      component: UniversityView
    },

    {
      path: '/payment',
      name: 'payment',
      component: PaymentView
    },
    {
      path: '/youtube-videos',
      name: 'youtube-videos',
      component: YoutubeVideosView
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

export default router
