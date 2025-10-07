import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
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
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={28} className="text-primary" />
              <span className="text-xl font-bold text-foreground">АудитПро</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('contacts')} className="text-muted-foreground hover:text-primary transition-colors">Контакты</button>
              <button onClick={() => scrollToSection('disclosure')} className="text-muted-foreground hover:text-primary transition-colors">Раскрытие информации</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Профессиональный аудит<br />и консалтинг
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Надёжный партнёр в финансовом контроле и бизнес-консультировании с 2005 года
          </p>
          <Button size="lg" onClick={() => scrollToSection('contacts')} className="text-lg px-8">
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">О компании</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-lg text-muted-foreground mb-6">
                АудитПро — ведущая аудиторская компания с многолетним опытом работы на российском рынке. 
                Мы предоставляем полный спектр услуг в области аудита, налогового консультирования и бухгалтерского учёта.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наша команда состоит из высококвалифицированных специалистов с профессиональными сертификатами 
                и многолетним опытом работы в крупнейших компаниях.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <Icon name="Award" size={32} className="text-primary mb-2" />
                  <CardTitle>18+ лет</CardTitle>
                  <CardDescription>на рынке</CardDescription>
                </CardHeader>
              </Card>
              <Card className="animate-fade-in">
                <CardHeader>
                  <Icon name="Users" size={32} className="text-primary mb-2" />
                  <CardTitle>500+</CardTitle>
                  <CardDescription>клиентов</CardDescription>
                </CardHeader>
              </Card>
              <Card className="animate-fade-in">
                <CardHeader>
                  <Icon name="FileCheck" size={32} className="text-primary mb-2" />
                  <CardTitle>1000+</CardTitle>
                  <CardDescription>проектов</CardDescription>
                </CardHeader>
              </Card>
              <Card className="animate-fade-in">
                <CardHeader>
                  <Icon name="Shield" size={32} className="text-primary mb-2" />
                  <CardTitle>100%</CardTitle>
                  <CardDescription>надёжность</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="FileSearch" size={40} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Аудиторские услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Обязательный аудит</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Инициативный аудит</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Специальный аудит</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Calculator" size={40} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Бухгалтерское сопровождение</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Ведение учёта</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Восстановление учёта</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Консультации</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Scale" size={40} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Налоговый консалтинг</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Налоговое планирование</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Налоговые проверки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Оптимизация налогов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="TrendingUp" size={40} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Оценочные услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Оценка бизнеса</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Оценка недвижимости</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Оценка активов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Briefcase" size={40} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Юридические услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Правовой аудит</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Договорная работа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Судебная защита</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Building" size={40} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Корпоративные услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Регистрация компаний</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Реорганизация</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Ликвидация</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Контакты</h2>
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
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Button type="submit" className="w-full">Отправить заявку</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclosure Section */}
      <section id="disclosure" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Раскрытие информации</h2>
          <div className="max-w-4xl mx-auto space-y-4 animate-fade-in">
            <Card>
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
      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={28} />
                <span className="text-xl font-bold">АудитПро</span>
              </div>
              <p className="text-gray-300">Профессиональный аудит и консалтинг с 2005 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-gray-300">г. Москва, ул. Тверская, д. 15</p>
              <p className="text-gray-300">+7 (495) 123-45-67</p>
              <p className="text-gray-300">info@auditpro.ru</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <p className="text-gray-300">Понедельник - Пятница</p>
              <p className="text-gray-300">9:00 - 18:00</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 АудитПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
