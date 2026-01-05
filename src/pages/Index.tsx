import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AuthModal from "@/components/AuthModal";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const creators = [
    {
      id: 1,
      name: "Алиса Морозова",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      subscribers: 12500,
      rating: 4.9,
      category: "Фитнес",
      tier: "Premium",
      price: 990
    },
    {
      id: 2,
      name: "Дмитрий Волков",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry",
      subscribers: 8300,
      rating: 4.8,
      category: "Кулинария",
      tier: "Standard",
      price: 490
    },
    {
      id: 3,
      name: "Мария Светлова",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      subscribers: 15200,
      rating: 5.0,
      category: "Музыка",
      tier: "VIP",
      price: 1490
    }
  ];

  const subscriptionTiers = [
    {
      name: "Базовый",
      price: 490,
      features: ["Доступ к фото", "Еженедельные обновления", "Комментарии"],
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Стандарт",
      price: 990,
      features: ["Всё из Базового", "Доступ к видео", "Прямые эфиры", "Закрытые чаты"],
      color: "from-pink-500 to-purple-500",
      popular: true
    },
    {
      name: "VIP",
      price: 1990,
      features: ["Всё из Стандарта", "Эксклюзивный контент", "Личные сообщения", "Приоритетная поддержка"],
      color: "from-blue-500 to-cyan-400"
    }
  ];

  const videoReviews = [
    { id: 1, author: "Иван К.", rating: 5, text: "Отличная платформа!" },
    { id: 2, author: "Елена М.", rating: 5, text: "Удобно и качественно" },
    { id: 3, author: "Петр С.", rating: 4, text: "Рекомендую всем!" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-display font-bold gradient-text">FanHub</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => setActiveTab("home")} className="text-sm hover:text-primary transition">Главная</button>
            <button onClick={() => setActiveTab("creators")} className="text-sm hover:text-primary transition">Авторы</button>
            <button onClick={() => setActiveTab("reviews")} className="text-sm hover:text-primary transition">Отзывы</button>
            <button onClick={() => setActiveTab("subscriptions")} className="text-sm hover:text-primary transition">Подписки</button>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setAuthModalOpen(true)}>Войти</Button>
            <Button className="gradient-primary border-0" onClick={() => setAuthModalOpen(true)}>Регистрация</Button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsContent value="home" className="mt-0">
            <section className="relative overflow-hidden py-32">
              <div className="absolute inset-0 gradient-primary opacity-10"></div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                  <Badge className="mb-6 gradient-primary border-0 px-4 py-2 text-base">
                    <Icon name="TrendingUp" size={16} className="mr-2" />
                    #1 Платформа в СНГ
                  </Badge>
                  <h1 className="text-6xl md:text-7xl font-display font-bold mb-6">
                    Создавай контент.<br />
                    <span className="gradient-text">Зарабатывай больше.</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Монетизируй свой талант и получай стабильный доход от подписчиков
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="gradient-primary border-0 text-lg px-8 py-6 hover-scale">
                      <Icon name="Rocket" size={20} className="mr-2" />
                      Начать зарабатывать
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale">
                      <Icon name="Play" size={20} className="mr-2" />
                      Смотреть видео
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-card/50">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                  {[
                    { icon: "Users", value: "50K+", label: "Авторов" },
                    { icon: "Heart", value: "2M+", label: "Подписчиков" },
                    { icon: "DollarSign", value: "₽150M+", label: "Выплачено" },
                    { icon: "Star", value: "4.9", label: "Рейтинг" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center">
                        <Icon name={stat.icon as any} size={32} className="text-white" />
                      </div>
                      <div className="text-4xl font-display font-bold mb-2">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-display font-bold mb-4">Топ авторы</h2>
                  <p className="text-muted-foreground">Самые популярные криейторы платформы</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {creators.map((creator, i) => (
                    <Card key={creator.id} className="glass border-white/10 hover-scale animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <Avatar className="w-16 h-16 border-2 border-primary">
                            <AvatarImage src={creator.avatar} />
                            <AvatarFallback>{creator.name[0]}</AvatarFallback>
                          </Avatar>
                          <Badge className="gradient-primary border-0">{creator.tier}</Badge>
                        </div>
                        <h3 className="text-xl font-display font-bold mb-2">{creator.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{creator.category}</p>
                        <div className="flex items-center gap-4 mb-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Icon name="Users" size={16} className="text-primary" />
                            <span>{creator.subscribers.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={16} className="text-yellow-500" />
                            <span>{creator.rating}</span>
                          </div>
                        </div>
                        <Button className="w-full gradient-primary border-0">
                          Подписаться за ₽{creator.price}/мес
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 bg-card/50">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl font-display font-bold mb-4">Реферальная программа</h2>
                  <p className="text-muted-foreground mb-8">Приводи друзей и получай 10% от их доходов навсегда</p>
                  <Card className="glass border-white/10 p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      {[
                        { icon: "Link", title: "Получи ссылку", desc: "Уникальная реферальная ссылка" },
                        { icon: "Share2", title: "Делись", desc: "Приглашай авторов и подписчиков" },
                        { icon: "Wallet", title: "Зарабатывай", desc: "10% пожизненно от дохода рефералов" }
                      ].map((step, i) => (
                        <div key={i} className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                            <Icon name={step.icon as any} size={24} className="text-white" />
                          </div>
                          <h3 className="font-display font-bold mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="creators">
            <section className="py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-display font-bold mb-8 text-center">Все авторы</h2>
                <div className="flex gap-4 mb-8 justify-center flex-wrap">
                  {["Все", "Фитнес", "Музыка", "Кулинария", "Lifestyle", "Спорт"].map(cat => (
                    <Button key={cat} variant="outline" className="hover-scale">
                      {cat}
                    </Button>
                  ))}
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[...creators, ...creators].map((creator, i) => (
                    <Card key={i} className="glass border-white/10 hover-scale">
                      <CardContent className="p-4">
                        <Avatar className="w-full h-32 rounded-lg mb-3">
                          <AvatarImage src={creator.avatar} className="object-cover" />
                          <AvatarFallback>{creator.name[0]}</AvatarFallback>
                        </Avatar>
                        <h3 className="font-display font-bold mb-1">{creator.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{creator.category}</p>
                        <div className="flex items-center justify-between text-xs mb-3">
                          <span className="flex items-center gap-1">
                            <Icon name="Users" size={14} className="text-primary" />
                            {creator.subscribers.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Star" size={14} className="text-yellow-500" />
                            {creator.rating}
                          </span>
                        </div>
                        <Button size="sm" className="w-full gradient-primary border-0">
                          ₽{creator.price}/мес
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="subscriptions">
            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-display font-bold mb-4">Тарифы подписки</h2>
                  <p className="text-muted-foreground">Выберите подходящий план для получения контента</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {subscriptionTiers.map((tier, i) => (
                    <Card key={i} className={`glass border-white/10 hover-scale relative overflow-hidden ${tier.popular ? 'ring-2 ring-primary' : ''}`}>
                      {tier.popular && (
                        <div className="absolute top-4 right-4">
                          <Badge className="gradient-primary border-0">Популярный</Badge>
                        </div>
                      )}
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-6`}>
                          <Icon name="Crown" size={32} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>
                        <div className="mb-6">
                          <span className="text-4xl font-display font-bold">₽{tier.price}</span>
                          <span className="text-muted-foreground">/мес</span>
                        </div>
                        <ul className="space-y-3 mb-8">
                          {tier.features.map((feature, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className={`w-full ${tier.popular ? 'gradient-primary border-0' : ''}`}>
                          Выбрать план
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 bg-card/50">
              <div className="container mx-auto px-4 max-w-4xl">
                <h3 className="text-3xl font-display font-bold mb-8 text-center">Выплаты авторам</h3>
                <Card className="glass border-white/10 p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Icon name="Wallet" size={32} className="text-primary mb-4" />
                      <h4 className="text-xl font-display font-bold mb-2">Еженедельные выплаты</h4>
                      <p className="text-muted-foreground">Получайте деньги каждую неделю на карту или электронный кошелек</p>
                    </div>
                    <div>
                      <Icon name="TrendingUp" size={32} className="text-primary mb-4" />
                      <h4 className="text-xl font-display font-bold mb-2">Без скрытых комиссий</h4>
                      <p className="text-muted-foreground">Мы берём только 20% от подписок. Остальное — ваше</p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="reviews">
            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-display font-bold mb-4">Видео отзывы</h2>
                  <p className="text-muted-foreground">Что говорят наши пользователи</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                  {videoReviews.map((review, i) => (
                    <Card key={review.id} className="glass border-white/10 hover-scale animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                          <Button size="lg" className="rounded-full w-16 h-16 gradient-primary border-0">
                            <Icon name="Play" size={24} />
                          </Button>
                        </div>
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <p className="text-sm mb-2">{review.text}</p>
                        <p className="text-xs text-muted-foreground">— {review.author}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <Card className="glass border-white/10 p-8 text-center">
                    <Icon name="Video" size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-display font-bold mb-4">Поделитесь своим опытом</h3>
                    <p className="text-muted-foreground mb-6">Запишите видео-отзыв и получите 1 месяц подписки бесплатно</p>
                    <Button className="gradient-primary border-0">
                      <Icon name="Camera" size={20} className="mr-2" />
                      Записать отзыв
                    </Button>
                  </Card>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-white/10 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={16} />
                </div>
                <span className="text-xl font-display font-bold">FanHub</span>
              </div>
              <p className="text-sm text-muted-foreground">Платформа для монетизации контента</p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Платформа</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition">Условия</a></li>
                <li><a href="#" className="hover:text-primary transition">Конфиденциальность</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                {["Instagram", "Twitter", "Youtube"].map(social => (
                  <button key={social} className="w-10 h-10 rounded-full glass hover-scale flex items-center justify-center">
                    <Icon name={social as any} size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
            © 2026 FanHub. Все права защищены.
          </div>
        </div>
      </footer>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </div>
  );
};

export default Index;