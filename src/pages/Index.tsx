import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-border/50 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={28} className="text-primary" />
              <span className="text-xl font-bold text-foreground">АудитПро</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">О компании</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Услуги</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Контакты</button>
              <button onClick={() => scrollToSection('disclosure')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Раскрытие информации</button>
            </nav>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col gap-6 mt-8">
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="text-left text-lg text-foreground hover:text-primary transition-colors"
                  >
                    О компании
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="text-left text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Услуги
                  </button>
                  <button 
                    onClick={() => scrollToSection('contacts')} 
                    className="text-left text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Контакты
                  </button>
                  <button 
                    onClick={() => scrollToSection('disclosure')} 
                    className="text-left text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Раскрытие информации
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-background to-secondary/[0.02]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.04),transparent_50%)]"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-[1.1]">
              Профессиональный<br />аудит и консалтинг
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Надёжный партнёр в финансовом контроле и бизнес-консультировании с 2005 года
            </p>
            <Button size="lg" onClick={() => scrollToSection('contacts')} className="text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-foreground">О компании</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-light">
                АудитПро — ведущая аудиторская компания с многолетним опытом работы на российском рынке. 
                Мы предоставляем полный спектр услуг в области аудита, налогового консультирования и бухгалтерского учёта.
              </p>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-light">
                Наша команда состоит из высококвалифицированных специалистов с профессиональными сертификатами 
                и многолетним опытом работы в крупнейших компаниях.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="animate-scale-in hover-lift border-0 shadow-sm bg-gradient-to-br from-white to-primary/[0.02]">
                <CardHeader className="text-center pb-6">
                  <Icon name="Award" size={40} className="text-primary mb-4 mx-auto" />
                  <CardTitle className="text-4xl mb-2">18+</CardTitle>
                  <CardDescription className="text-base">лет на рынке</CardDescription>
                </CardHeader>
              </Card>
              <Card className="animate-scale-in hover-lift border-0 shadow-sm bg-gradient-to-br from-white to-primary/[0.02]">
                <CardHeader className="text-center pb-6">
                  <Icon name="Users" size={40} className="text-primary mb-4 mx-auto" />
                  <CardTitle className="text-4xl mb-2">500+</CardTitle>
                  <CardDescription className="text-base">клиентов</CardDescription>
                </CardHeader>
              </Card>
              <Card className="animate-scale-in hover-lift border-0 shadow-sm bg-gradient-to-br from-white to-primary/[0.02]">
                <CardHeader className="text-center pb-6">
                  <Icon name="FileCheck" size={40} className="text-primary mb-4 mx-auto" />
                  <CardTitle className="text-4xl mb-2">1000+</CardTitle>
                  <CardDescription className="text-base">проектов</CardDescription>
                </CardHeader>
              </Card>
              <Card className="animate-scale-in hover-lift border-0 shadow-sm bg-gradient-to-br from-white to-primary/[0.02]">
                <CardHeader className="text-center pb-6">
                  <Icon name="Shield" size={40} className="text-primary mb-4 mx-auto" />
                  <CardTitle className="text-4xl mb-2">100%</CardTitle>
                  <CardDescription className="text-base">надёжность</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-foreground">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in hover-lift border-0 shadow-md bg-white overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="pb-4">
                <Icon name="FileSearch" size={48} className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl mb-3">Аудиторские услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Обязательный аудит</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Инициативный аудит</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Специальный аудит</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover-lift border-0 shadow-md bg-white overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="pb-4">
                <Icon name="Calculator" size={48} className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl mb-3">Бухгалтерское сопровождение</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Ведение учёта</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Восстановление учёта</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Консультации</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover-lift border-0 shadow-md bg-white overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="pb-4">
                <Icon name="Scale" size={48} className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl mb-3">Налоговый консалтинг</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Налоговое планирование</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Налоговые проверки</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Оптимизация налогов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover-lift border-0 shadow-md bg-white overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="pb-4">
                <Icon name="TrendingUp" size={48} className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl mb-3">Оценочные услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Оценка бизнеса</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Оценка недвижимости</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Оценка активов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover-lift border-0 shadow-md bg-white overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="pb-4">
                <Icon name="Briefcase" size={48} className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl mb-3">Юридические услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Правовой аудит</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Договорная работа</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Судебная защита</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover-lift border-0 shadow-md bg-white overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="pb-4">
                <Icon name="Building" size={48} className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl mb-3">Корпоративные услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Регистрация компаний</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Реорганизация</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Ликвидация</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-32 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-foreground">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Свяжитесь с нами</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Адрес:</p>
                    <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 15, оф. 301</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Телефон:</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Email:</p>
                    <p className="text-muted-foreground">info@auditpro.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Режим работы:</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="animate-fade-in border-0 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl mb-2">Оставьте заявку</CardTitle>
                <CardDescription className="text-base">Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full py-6 text-lg rounded-xl">Отправить заявку</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclosure Section */}
      <section id="disclosure" className="py-32 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-foreground">Раскрытие информации</h2>
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <Card className="border-0 shadow-md hover-lift bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Сведения об аудиторской организации</CardTitle>
                    <CardDescription className="mt-2">Основные данные компании</CardDescription>
                  </div>
                  <Icon name="FileText" size={32} className="text-primary" />
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p><strong>Полное наименование:</strong> ООО "АудитПро"</p>
                <p><strong>ОГРН:</strong> 1234567890123</p>
                <p><strong>ИНН:</strong> 7701234567</p>
                <p><strong>Член СРО:</strong> Ассоциация "Содружество"</p>
                <p><strong>Номер в реестре аудиторов:</strong> 12345678901234567890</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Отчётность</CardTitle>
                    <CardDescription className="mt-2">Финансовые показатели за последний год</CardDescription>
                  </div>
                  <Icon name="BarChart3" size={32} className="text-primary" />
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Бухгалтерская отчётность за 2024 год (скачать PDF)</p>
                <p>Отчёт о прозрачности за 2024 год (скачать PDF)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Информация о страховании</CardTitle>
                    <CardDescription className="mt-2">Страхование профессиональной ответственности</CardDescription>
                  </div>
                  <Icon name="ShieldCheck" size={32} className="text-primary" />
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p><strong>Страховая компания:</strong> АО "Страхование-Гарант"</p>
                <p><strong>Полис №:</strong> 1234567890</p>
                <p><strong>Сумма покрытия:</strong> 50 000 000 руб.</p>
                <p><strong>Срок действия:</strong> до 31.12.2025</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Лицензии и сертификаты</CardTitle>
                    <CardDescription className="mt-2">Документы, подтверждающие квалификацию</CardDescription>
                  </div>
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Свидетельство о членстве в СРО (скачать PDF)</p>
                <p>Квалификационные аттестаты аудиторов (скачать PDF)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Icon name="Building2" size={32} />
                <span className="text-2xl font-bold">АудитПро</span>
              </div>
              <p className="text-gray-300 text-lg font-light leading-relaxed">Профессиональный аудит и консалтинг с 2005 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Контакты</h4>
              <p className="text-gray-300 mb-2">г. Москва, ул. Тверская, д. 15</p>
              <p className="text-gray-300 mb-2">+7 (495) 123-45-67</p>
              <p className="text-gray-300">info@auditpro.ru</p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Режим работы</h4>
              <p className="text-gray-300 mb-2">Понедельник - Пятница</p>
              <p className="text-gray-300">9:00 - 18:00</p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-light">© 2025 АудитПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;