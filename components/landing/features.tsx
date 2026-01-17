import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    title: 'Lightning Fast',
    description: 'Built for speed with optimized performance that scales with your business.',
    icon: '⚡',
  },
  {
    title: 'Secure by Default',
    description: 'Enterprise-grade security with end-to-end encryption and compliance.',
    icon: '🔒',
  },
  {
    title: 'Easy Integration',
    description: 'Connect with your favorite tools through our extensive API and webhooks.',
    icon: '🔌',
  },
  {
    title: 'Real-time Analytics',
    description: 'Make data-driven decisions with comprehensive analytics and reporting.',
    icon: '📊',
  },
  {
    title: '24/7 Support',
    description: 'Get help whenever you need it with our dedicated support team.',
    icon: '💬',
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Grow without limits on our robust and reliable cloud infrastructure.',
    icon: '🚀',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you build, launch, and grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
