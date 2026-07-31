

import { useState } from 'react';
import { Menu, X, Check, ArrowRight, BookOpen, MessageSquare, Zap, BarChart3, Target, Brain } from 'lucide-react';

const RecalioLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="recalioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#001a4d" />
        <stop offset="100%" stopColor="#0066ff" />
      </linearGradient>
    </defs>
    <path
      d="M8 6C6.895 6 6 6.895 6 8v16c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V8c0-1.105-.895-2-2-2H8z"
      stroke="url(#recalioGradient)"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="14" y1="6" x2="14" y2="26" stroke="url(#recalioGradient)" strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M18 8c0-.552.448-1 1-1h2c1.657 0 3 1.343 3 3 0 1.38-1.13 2.506-2.446 2.491.706.65 1.446 1.413 1.446 2.509 0 1.657-1.343 3-3 3h-3V8z"
      stroke="url(#recalioGradient)"
      strokeWidth="1.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const navigation = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'AI PDF Summary',
      description: 'Intelligent summarization of your documents and lecture notes in seconds.',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'AI Tutor Chat',
      description: 'Ask questions and get instant explanations from your personal AI tutor.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Smart Flashcards',
      description: 'Auto-generated flashcards that adapt to your learning pace and weak areas.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Quiz Generator',
      description: 'Create customized quizzes to test your understanding and retention.',
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Study Guides',
      description: 'Comprehensive study guides tailored to your materials and learning style.',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Progress Tracking',
      description: 'Visualize your learning journey with detailed analytics and insights.',
    },
  ];

  const problems = [
    { icon: '📚', text: 'Too many PDFs to organize' },
    { icon: '🤔', text: 'Difficult concepts to understand' },
    { icon: '🧠', text: 'Forgetting what you learned' },
    { icon: '⏰', text: 'No organized study routine' },
  ];

  const pricing = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started',
      features: [
        { text: 'Limited uploads', included: true },
        { text: 'Basic AI summaries', included: true },
        { text: 'Limited flashcards', included: true },
        { text: 'Limited quizzes', included: true },
        { text: 'AI Chat', included: false },
        { text: 'Study planner', included: false },
      ],
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/month',
      description: 'For serious learners',
      featured: true,
      features: [
        { text: 'Unlimited uploads', included: true },
        { text: 'Advanced AI summaries', included: true },
        { text: 'Unlimited flashcards', included: true },
        { text: 'Unlimited quizzes', included: true },
        { text: 'AI Chat & tutor', included: true },
        { text: 'Study planner & analytics', included: true },
      ],
    },
  ];

  const faqs = [
    {
      question: 'What is Recalio?',
      answer: 'Recalio is an AI study companion that transforms your learning materials into interactive study tools. Upload PDFs, lecture notes, or websites, and get AI-powered summaries, flashcards, quizzes, and personalized study plans.',
    },
    {
      question: 'How does Recalio work?',
      answer: 'Simply upload your learning materials, and our AI analyzes the content to generate customized study resources. You can then study, practice quizzes, chat with your AI tutor, and track your progress.',
    },
    {
      question: 'Can I upload PDFs?',
      answer: 'Yes! You can upload PDFs, lecture notes in various formats, and even provide URLs to websites. Recalio supports multiple file types and sources.',
    },
    {
      question: 'Can Recalio generate flashcards?',
      answer: 'Absolutely. Recalio automatically generates smart flashcards from your materials. The Pro plan offers unlimited flashcards with advanced customization options.',
    },
    {
      question: 'Can Recalio generate quizzes?',
      answer: 'Yes, Recalio creates adaptive quizzes based on your materials. Track your performance and get insights on areas that need more focus.',
    },
    {
      question: 'Is Recalio free?',
      answer: 'Recalio offers a free plan with limited features, perfect for trying it out. We also have a Pro plan with unlimited resources and advanced features.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Your privacy is our priority. All your data is encrypted and securely stored. We comply with all relevant data protection regulations.',
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <RecalioLogo />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">Recalio</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Login
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-900 to-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                Start Learning Free
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="border-t border-gray-200 pb-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 px-4 pt-4">
                <button className="w-full px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  Login
                </button>
                <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-900 to-blue-600 text-white text-sm font-medium rounded-lg">
                  Start Learning Free
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-gray-50 px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                Turn your notes into <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">knowledge</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform PDFs, lecture notes, websites, and learning materials into AI-powered summaries, flashcards, quizzes, study guides, and personalized study plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105">
                  Start Learning Free
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                  See How It Works <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="h-6 w-32 bg-gradient-to-r from-blue-900 to-blue-600 rounded opacity-80"></div>
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-20 bg-white rounded-lg border border-gray-200 shadow-sm"></div>
                    <div className="h-20 bg-white rounded-lg border border-gray-200 shadow-sm"></div>
                    <div className="h-20 bg-white rounded-lg border border-gray-200 shadow-sm"></div>
                    <div className="h-20 bg-white rounded-lg border border-gray-200 shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The challenges students face</h2>
            <p className="text-xl text-gray-600">Your learning shouldn&apos;t be complicated</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
              >
                <div className="text-3xl mb-3">{problem.icon}</div>
                <p className="text-gray-700 font-medium">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Workflow */}
      <section id="how-it-works" className="px-4 py-20 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Recalio Works</h2>
            <p className="text-xl text-gray-600">Four simple steps to smarter learning</p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: '1', title: 'Upload Materials', desc: 'Share PDFs, notes, or links' },
              { step: '2', title: 'AI Understands', desc: 'Our AI analyzes your content' },
              { step: '3', title: 'Generate Tools', desc: 'Create study resources instantly' },
              { step: '4', title: 'Study Smarter', desc: 'Learn more effectively' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="rounded-xl bg-white border border-gray-200 p-6 h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-900 to-blue-600 text-white font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 text-gray-300 font-bold text-xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful features for effective learning</h2>
            <p className="text-xl text-gray-600">Everything you need to master your studies</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-900 to-blue-600 text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="px-4 py-20 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your personalized learning hub</h2>
            <p className="text-xl text-gray-600">Visualize progress and stay motivated</p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:p-12 shadow-xl border border-blue-200">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-4">
                <div className="h-4 w-24 bg-gray-300 rounded opacity-70"></div>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-3 w-full bg-white rounded opacity-60"></div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="grid gap-4 md:grid-cols-2">
                  {['Recent Documents', 'AI Summary', 'Flashcards', 'Quiz Results', 'Study Streak', 'Analytics'].map((item, i) => (
                    <div key={i} className="h-24 bg-white rounded-lg border border-blue-200 flex items-center justify-center text-sm text-gray-600 font-medium shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that works for you</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {pricing.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border transition-all ${
                  plan.featured
                    ? 'border-blue-600 bg-gradient-to-b from-blue-50 to-white shadow-xl ring-2 ring-blue-600 ring-opacity-20 md:scale-105'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mb-8">{plan.description}</p>
                <button
                  className={`w-full py-3 px-6 font-semibold rounded-lg mb-8 transition-all ${
                    plan.featured
                      ? 'bg-gradient-to-r from-blue-900 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/30'
                      : 'border-2 border-gray-200 text-gray-900 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  Get Started
                </button>
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 ${
                          feature.included ? 'text-green-600' : 'text-gray-300'
                        }`}
                      />
                      <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-4 py-20 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about Recalio</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg bg-white overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                  <span className={`text-2xl text-blue-600 transition-transform ${expandedFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to transform your learning?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of students using Recalio to study smarter and achieve better grades.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105">
              Start Learning Free
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <RecalioLogo />
                <span className="text-lg font-bold text-white">Recalio</span>
              </div>
              <p className="text-sm">Transform your learning materials into powerful study tools with AI.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2024 Recalio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
