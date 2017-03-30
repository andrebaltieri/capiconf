import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { PresentationPage } from '../presentation/presentation';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {
  public agenda: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) { }

  ionViewDidLoad() {
    this.agenda.push({
      time: '09:00',
      presentations: [
        {
          speaker: { name: 'Walmyr Carvalho', title: '99, São Paulo, Brasil', image: 'assets/images/walmyr.jpg', bio: 'Desenvolvedor Android e designer nascido em Brasília, mas atualmente vivendo em São Paulo, SP. Trabalha com Android há mais de 6 anos e sempre busca fazer o seu trabalho com excelência técnica em desenvolvimento e design. Já trabalhou em projetos para empresas como Hotel Urbano, Globo.com, CI&T, Google e atualmente trabalha na 99. Além do trabalho, é bastante ativo em comunidades e acredita que todo conhecimento deve ser compartilhado. É organizador do Android Meetup Rio de Janeiro, Kotlin Meetup São Paulo e do Android Dev BR, a maior comunidade brasileira de Android no Slack, com mais de 2000 membros. Além disso, costuma palestrar e participar de conferências e tenta retribuir a comunidade o máximo possível.' },
          title: 'Material Design para Desenvolvedores Android',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Auditório',
          description: 'O Material Design é um visual language criado pelo Google para estabelecer boas práticas de design, usabilidade e motion para Android e web. Nesse talk vamos aprender as melhores práticas para se aplicar o Material Design em projetos Android, inclusive para dispositivos pré-Lollipop, com a utilização eficiente das support libraries disponíveis.'
        },
        {
          speaker: { name: 'Joselito Júnior', title: 'Tampa Works, Recife, Brasil', image: 'assets/images/joselito.jpg', bio: 'Organizador do GDG Recife e do devbeers, podcaster no Code Talks, instrutor dos Ionic Bootcamp e fundador das startups premiadas Estudorama e Rabiscapp. Além de ganhador de Hackathons aposentado, é entusiasta do Design Thinking, Lean Startup e desenvolvimento Ágil de software. Fã de Fórmula 1 e de fazer piadas de gosto duvidoso.' },
          title: 'Você não sabia que seu navegador conseguia fazer isso',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Sala 105',
          description: 'Em breve descrição.'
        },
        {
          speaker: { name: 'Danilo Gonçalves', title: 'EBANX, Curitiba, Brasil', image: 'assets/images/danilo.png', bio: 'Arquiteto de Software no EBANX, rubista de longa data, nerd de carteirinha e eterno estudante. Trabalhando como desenvolvedor por mais de metade de sua existência, adquiriu experiência em diversas linguagens e tecnologias e deixou um rastro de novos rubistas por onde passou. Entusiasta da programação funcional, mais recentemente da linguagem Elixir, busca constantemente trazer novos membros para o lado imutável da força.' },
          title: 'Programação Funcional: A Nova Geração',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Sala 106',
          description: 'Linguagens de programação funcionais já estão conosco a quase 60 anos. Se elas realmente trazem todos os benefícios mencionados pelos seus defensores, porque a orientação a objetos ainda é o paradigma dominante? Será que essa onda recente de popularidade é uma tendência ou só uma moda passageira? Vamos tentar responder estas e outras perguntas dando uma olhada no Elixir, um dos tripulantes da nova geração de linguagens funcionais.'
        }
      ]
    });

    this.agenda.push({
      time: '10:00',
      presentations: [
        {
          speaker: { name: 'André Baltieri', title: 'balta.io, São Paulo, Brasil', image: 'assets/images/baltieri.jpg', bio: 'Microsoft MVP desde 2013, trabalha com aplicações Web desde 2013 tendo atuado em projetos de pequeno, médio e grande porte no Brasil e Estados Unidos. Apesar do grande vínculo com a Microsoft, é amante das tecnologias Open Source, onde atua boa parte do tempo. Atualmente trabalha com consultorias e treinamentos, tendo passado por inúmeras empresas no Brasil, e é CIO da plataforma de cursos online, balta.io.' },
          title: 'Progressive Web Apps e o Futuro da Web e das aplicações Mobile',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Auditório',
          description: 'As aplicações Mobile já dominam o mercado, isto é um fato, mas você, já parou para pensar o que acontecerá com nossas queridas aplicações Web em um futuro próximo, onde teremos cada vez mais dispositivos móveis, quem sabe até substituindo completamente os PCs?'
        },
        {
          speaker: { name: 'Marcelo Ricardo Quinta', title: 'UFG, Goiânia, Brasil', image: 'assets/images/quinta.jpg', bio: 'Desenvolvedor móvel há mais de 10 anos, professor, pesquisador, Google Expert, Intel Innovator, mentor de startups para o Google.' },
          title: 'Bibliotecas do Google no iOS: fanboy é a sua vó',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Sala 105',
          description: 'Programar em iOS com Swift é bem bacana e nada de ser fanboy. Tem muita API do Google que pode ser muito bem utilizada para esta plataforma. Nesta palestra exploraremos alguns segredinhos delas, principalmente relacionados ao Firebase.'
        },
        {
          speaker: { name: 'Matheus Costa Vieira', title: 'CINQ Technologies, Curitiba, Brasil', image: 'assets/images/matheus_costa.jpg', bio: 'Casado com a Daniela e pai do Pedro Henrique. Bacharel em Sistemas de Informação pela Universidade Positivo, pós-graduado em Engenharia E Aarquitetura DE Software pela Universidade Estácio de Sá, pós-graduando em Sistemas Embarcados e Internet das Coisas pela Univerdade Positivo. Mais de 9 anos de experiência com desenvolvimento de software com passagem em diversos tipos de projetos (e-commerce, rastreamento de veículos, ERP, sistemas de mensagens de aviação comercial). Trabalho com desenvolvimento Web, Desktop e Mobile. Esse semestre inicei na carreira de docência lecionando as disciplinas de Desenvolvimento Web e Programação Visual na Faculdade Opet' },
          title: 'Peguei um freela e agora?',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Sala 106',
          description: 'As aventuras de um desenvolvedor especialista em uma ferramenta de conhecimentos avançados, tendo que oferecer um serviço utilizando uma ferramenta diferente e inexplorada! Será que deu certo?.'
        }
      ]
    });

    this.agenda.push({
      time: '11:00',
      presentations: [
        {
          speaker: { name: 'Loiane Groner', title: 'Citi e loiane.training, São Paulo, Brasil', image: 'assets/images/loiane.jpg', bio: 'Possui 10+ anos de experiência em TI, trabalha como desenvolvedora FullStack em uma empresa multinacional e ama compartilhar conhecimento! Já palestrou por vários eventos no Brasil e ministrou cursos nos Estados Unidos. Autora dos livros: Ext JS 4 First Look, Mastering Ext J(primeira e segunda edição), Sencha Architect App Development e Learning JavaScript Data Structures and Algorithms (primeira e segunda edição), JavaScript Regular Expressions - todos publicados pela editora Packt e lançados mundialmente em inglês (com tradução de alguns livros para chinês e coreano). Espera poder lançar livros em Português em breve. Entusiasta Java, Sencha, Angular e mobile híbrido (Phonegap/Ionic). Participa ativamente dessas comunidades. Escreve para o blog http://loiane.com e publica aulas e cursos em http://loiane.training.' },
          title: 'Apps Mobile híbridas com Ionic 2',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Auditório',
          description: 'Ionic 2 é um framework open source para desenvolvimento de aplicativos mobile híbrido, onde se pode desenvolver o aplicativo usando HTML/CSS e JavaScript, fazer acesso nativo usando essas tecnologias e compilar o app para diferentes plataformas como iOS, Android e Windows Phone e publicá-lo nas respectivas app stores. O Ionic 2 é baseado em frameworks também open source e populares no mercado: Phonegap/Cordova, Angular2 e Sass (CSS). Vamos aprender como criar um app em alguns minutos usando os principais conceitos do Angular 2 como Módulos, Components, Templates, Diretivas e Serviços + RxJS Observables.'
        },
        {
          speaker: { name: 'Ângelo Polotto', title: 'Radek Systems, Curitiba, Brasil', image: 'assets/images/polotto.jpg', bio: 'Graduado em Engenharia Eletrônica pela Universidade Tecnológica Federal do Paraná, possui interesse em desenvolvimento de software voltado para dispositivos móveis e embarcados. Trabalha atualmente com desenvolvimento para Android e iOS utilizando a ferramenta Xamarin e a linguagem C#.' },
          title: 'Conceitos básicos de eletrônica aplicados ao Arduino',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Sala 105',
          description: 'Dentro do grande número de projetos com o Arduino disponíveis na Internet, sempre surgem dúvidas de qual é o melhor a ser seguido. O objetivo dessa palestra é mostrar conceitos básicos de eletrônica para ajudar nessa escolha.'
        },
        {
          speaker: { name: 'Marcos Hitanael Barchiki dos Santos', title: 'RouteSmart, Curitiba, Brasil', image: 'assets/images/marcos.jpg', bio: 'Sou desenvolvedor, empreendedor, nerd e maker. CEO na RouteSmart e 100% focado em soluções inovadoras. Fundador da Comunidade CocosSharp Brasil e membro do CodeFor Curitiba. Fã de C#, PHP e Hackathons OpenSource. Entusiasta de Xamarin, Games, IoT e realidade Virtual.' },
          title: 'Xamarin CocosSharp, muito além dos Games',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Sala 106',
          description: 'Essa palestra tem como objetivo demonstrar todo o potencial do Xamarin CocosSharp para a criação de games, ou ainda criar interfaces ricas e mais elaboradas para seus apps com Xamarin.Forms.'
        }
      ]
    });

    this.agenda.push({
      time: '13:00',
      presentations: [
        {
          speaker: { name: 'Neto Marin', title: 'Google, São Paulo, Brasil', image: 'assets/images/NetoMarin.png', bio: 'Neto Marin é Developer Advocate do Google no Brasil e tem como principal objetivo ajudar os desenvolvedores a criarem aplicativos de alta qualidade para as plataformas Android. Um apaixonado pelas tecnologias móveis, começou a desenvolver para telefones celulares em 2005 com Java ME, tendo experiência em diversas outras plataformas e trabalhando com Android desde os primeiros SDKs em 2007. Desde 2010 vem se aventurando no mundo de softwares embarcados e pequenos dispositivos conectados como hobby, e agora está envolvido com a nova plataforma de IoT do Google, o Android Things. Neto também é um dos hosts do podcast Dev & Community Cast, que tem episódios sobre comunidades e desenvolvimento, além da série Faaala, Neto! onde compartilha suas experiências e pensamentos sobre o desenvolvimento de software.' },
          title: 'Conhecendo o Android Things',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Auditório',
          description: 'Recentemente o Google anunciou sua plataforma para Internet das Coisas, o Android Things. Agora, qualquer desenvolvedor Android também é um desenvolvedor de soluções para IoT e pode ir do protótipo a uma aplicação final usando tecnologias que já utiliza em aplicativos móveis. Nessa palestra, Neto Marin irá mostrar como funciona a plataforma, suas principais vantagens, características e no final, uma demo de como criar um projeto com o Android Studio e fazer uma pequena aplicação de forma rápida e simples.'
        },
        {
          speaker: { name: 'Cynthia Zanoni', title: 'Microsoft, São Paulo, Brasil', image: 'assets/images/cynthia.jpg', bio: 'Evangelista Técnica na Microsoft, curadora da Mobile Summit Brazil e idealizadora do WoMakersCode, um projeto focado em capacitação e empoderamento feminino e de minorias na TI e atua, também, como coordenadora do WoMoz (Women & Mozilla). É apaixonada open source e nas horas vagas, cria projetos e iniciativas que possam contribuir para o fortalecimento das mulheres no mercado de trabalho e comunidades de tecnologia.' },
          title: 'NoSql, No Problem. Really!',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Sala 105',
          description: 'Flexibilidade, escalabilidade, armazenamento de dados de alto desempenho e integração são requisitos de boas apps. Nesta sessão, vamos falar um pouco sobre NodeJS, DocumentDB e outras APIs interessantes para você começar sua aplicação hoje.'
        },
        {
          speaker: { name: 'Leandro Prado', title: 'Microsoft, São Paulo, Brasil', image: 'assets/images/leandro.png', bio: 'Leandro Prado é graduado em Sistemas de Informação pela PUC-PR, trabalho com desenvolvimento desde 2003 e nos últimos anos tenho trabalhado com Visual Studio e TFS. Atualmente trabalha como Premier Field Engineer na Microsoft especializado em DevOps e ALM. Fanático por futebol e torcedor do melhor time do paraná – COXA' },
          title: 'DevOps para todos os times',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Sala 106',
          description: 'Nesta palestra vamos usar o Visual Studio Team Services para criar um release pipeline completo para o Azure. Você verá vários recursos do VSTS em ação, incluindo criação de projetos, planejamento Agile (backlog e Kanban), Git, integração contínua, Unit Tests, Release Management e Azure. Você poderá levar o que aprendeu nesta sessão e implementá-lo em sua organização para qualquer linguagem e para qualquer plataforma.'
        }
      ]
    });

    this.agenda.push({
      time: '14:00',
      presentations: [
        {
          speaker: { name: 'Leonardo Saraiva', title: 'Beauty Date, Campo Mourão, Brasil', image: 'assets/images/leonardo.jpg', bio: 'Co-fundador do GURU-PR e do WSO2 Brasil! Organizador do Tech Day, que ocorre anualmente em Curitiba. Desenvolvedor louco por tecnologia, atualmente surfando na onda de ruby, rails, hanami, go, grpc, docker, microserviços e kubernetes. Mas com experiência em sinatra, python (django), java, c# e um pouco de tudo, mas já não tão ativamente.' },
          title: 'Liberdade e escalabilidade: Microserviços, Kubernetes, gRPC e Docker',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Auditório',
          description: 'Usando Kubernetes e Docker é possível entregar uma arquitetura de microserviços, multi cloud e encontrar a felicidade em forma de escalabilidade e liberdade, sem ficar amarrado e dependente das mágicas de um PaaS.'
        },
        {
          speaker: { name: 'Angelo Belchior', title: 'ESX - entrega contínua de valor, São Paulo, Brasil', image: 'assets/images/angelo.png', bio: 'Angelo Belchior é desenvolvedor há quase 15 anos tendo participado de projetos Desktop, Web e agora Mobile utilizando Xamarin. É Microsoft MVP em Visual Studio and Technologies, MCPD em Web e é Lead Software Developer na ESX' },
          title: 'Meu amigo Bot!',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Sala 105',
          description: 'Criando um Bot inteligente utilizando Inteligência Artificial para automatizar as suas tarefas usando o BotFramework e o Cognitive Services.'
        },
        {
          speaker: { name: 'Matheus Donizete', title: 'StrikeXII Development, Curitiba, Brasil', image: 'assets/images/matheus.jpg', bio: 'Entusiasta JavaScript, cursando Ciência da Computação pela UFPR, desenvolvedor JavaScript há 5 anos, em paralelo trabalhando com diversas linguagens back-end, por vezes com desenvolvimento móvel, porém sempre no cenário front-end. Atualmente trabalhando com aplicações Full-Stack feitas em JavaScript, voltado a aplicações em tempo real.' },
          title: 'Habilitando HTTP/2 e Conversando com o browser',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Sala 106',
          description: 'Como funciona o HTTP/2 com NodeJS? Entenda as implicações, abordagens e recursos existentes para auxiliar na performance das suas aplicações web abordando também a Web Cache API e questões de performance na integração entre cliente e servidor.'
        }
      ]
    });

    this.agenda.push({
      time: '16:00',
      presentations: [
        {
          speaker: { name: 'Lazaro Fernandes', title: 'Lambda3, São Paulo, Brasil', image: 'assets/images/lazaro.jpg', bio: 'Formado em Ciências da Computação e com pós-graduação em Desenvolvimento de Produtos e Serviços pela FIA, possui 10 anos de experiência em desenvolvimento web, participa de eventos, podcasts e meetups da área ajudando na divulgação de novas tecnologias' },
          title: 'Desenvolvendo apps holográficas com o Microsoft Hololens',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Auditório',
          description: 'Confira nesta palestra como desenvolver aplicativos holográficos para o Microsoft Hololens utilizando C# e Unity.'
        }
      ]
    });

    this.agenda.push({
      time: '17:00',
      presentations: [
        {
          speaker: { name: 'Luis Leão', title: 'Udacity, São Paulo, Brasil', image: 'assets/images/walmyr.jpg', bio: 'Course Manager na Udacity, co-organiza o Google Developer Group de São Paulo e atua em diversas áreas voltadas para empreendedorismo e inovação, entre eles é responsável por um grupo de estudo de Internet das Coisas (IoT) no RedBull Station e pelo programa Startup in School, projeto de formação empreendedora e programação para estudantes de escolas públicas.' },
          title: 'Como Android Things, Google Home e Firebase vão mudar os conceitos de IoT Internet dos Trem para desenvolvedores',
          language: 'PT-BR',
          level: 'Básico',
          place: 'Auditório',
          description: 'A proposta é apresentar as possibilidades de criação de projetos de Internet das Coisas (ou Internet dos Trens se você for de MG) e quais são as possibilidades de integrações rápidas para validação de protótipos.'
        }
      ]
    });
  }

  showDetails(data: any) {
    let modal = this.modalCtrl.create(PresentationPage, { presentation: data });
    modal.present();
  }
}
