import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Personal portfolio in Angular',
      desc: '',
      livedemo: 'https://naga-barri.github.io/naga.barri/#/',
      githurl: 'https://github.com/naga-barri/naga.barri',
      mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/img_portfolio1.png',
      tech: 'Angular 10'
    },

  ]
  about2 = `My current role is as a server-side Java developer for Oracle,
  having total 13+ years of experience .
  Having experience working on cloud-native REST microservices .
  My primary skills are Core Java, EJB, Servlets, REST microservices and SQL
  `

  about = "Very strong in Core Java fundamentals, Collections framework, Multithreading and Concurrency API. Very good in Data Structures & Algorithms and Design Patterns."
  resumeurl = "https://docs.google.com/document/d/1z9DFCCyAjXB-vgE2msnbJXJ2dm6aiN21QhioQPS4AVA/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Core Java',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'Spring',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'REST',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'Angular2+',
      'progress': '60%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2014 - 2008',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Technology',
      'info': `Completed B.Tech in Computer Science Engineering with 75%.`,
      'institution': 'Andhra University College of Engineering, Visakhapatnam'
    },
    {
      'id': '2',
      'from_to_year': '2002 - 2004',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'KKR Junior College, Bhimavaram (A.P)',
      'info': `Studied MPC (87%).`
    },
    {
      'id': '3',
      'from_to_year': '2001 - 2002',
      'education': 'Secondary  School',
      'stream': 'NA',
      'institution': 'Ushodaya Public School, Bhimavaram (A.P)',
      'info': `Completed my Secondary school with 63%.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Oracle India Pvt Ltd',
      location: 'Hyderabad',
      timeline: 'Feb 2018 to Present',
      role: 'Software Developer',
      designation: 'Principal Member of Technical Staff',
      work: `Technologies : Java 17, OCI (Oracle Cloud Infrastructure), Dropwizard, RESTFul Webservices, Microservices, Oracle 19c, IntelliJ, Maven, Jira, Git .

      Project 1 : Worked on OCI Logging Analytics. OCI Logging Analytics (Logging Enterprise Edition) provides rich analysis of log and operational machine data using clustering and transactional analysis to make it easier to find potential problems. It includes a rich library of log sources and parsers covering wide range of both Oracle and non-Oracle on-premise products. This service coexists alongside OCI logging (which is logging framework for Cloud applications deployed on OCI). It has several components, each one designed as a microservice. Uploads service is part of this product, which handles On-Demand Upload of log files (via REST API, users can upload log files into Logging Analytics service), supporting collection of logs from different providers like Object Storage .
    
      Project 2 : Worked on Order and Service Management. Order and Service Management (OSM) provides communications service providers and large enterprises with the industry certified, feature-rich order lifecycle management solution that quickly becomes critical to their business success, specifically homing in on; faster time to market, efficient delivery of bundled offerings with full end to end order visibility and accurate as well as timely billing updates to avoid revenue leakage .
    
      Responsibilities: Working as individual contributor in Uploads service. Involved in design & implementation of features
      `

    },
    {
      id: 3,
      company: 'Sapient Consulting Ltd',
      location: 'Bangalore',
      timeline: 'Jan 2014 to Feb 2018',
      role: 'Software Developer',
      designation: 'Specialist Platform',
      work: `Technologies : Java 8, SQL .

  Worked on trading applications (Middle Office)
  `
    },

    {
      id: 2,
      company: 'Infosys Technologies',
      location: 'Mangalore',
      timeline: 'Jun 2012 - Jan 2014',
      role: 'Senior Systems Engineer',
      designation: 'Senior Systems Engineer',
      work: `Technologies : Java, SQL .

  Worked on identity management (reporting & quality) system
  `
    },

    {
      id: 1,
      company: 'HCL Technologies Ltd',
      location: 'Gurgaon',
      timeline: 'Sep 2009 - Jun 2012',
      role: 'Software Engineer',
      designation: 'Software Engineer',
      work: `Technologies : Java, SQL .

  Worked on trading system (Middle Office)
  `
    },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/img_github.png',
      url: 'https://github.com/naga-barri/'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
