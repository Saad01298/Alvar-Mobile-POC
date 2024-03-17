import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
    
  newMemberHeader: string[] = ['Date', 'Commodo'];

  newMemberData: (string | number)[][] = [
      ['1', 450],
      ['2', 1170],
      ['3', 660],
      ['4', 1130],
      ['5', 1100],
      ['6', 370],
      ['7', 1660],
      ['8', 700],
      ['9', 1900],
      ['10', 600],
      ['11', 800],
      ['12', 490],
      ['13', 560],
      ['14', 1930],
      ['15', 700],
      ['16', 470],
      ['17', 660],
      ['18', 890],
      ['19', 950],
      ['20', 780],
      ['21', 1500],
      ['22', 1900],
      ['23', 660],
      ['24', 1130],
      ['25', 1100],
      ['26', 1170],
      ['27', 760],
      ['28', 720],
      ['29', 650],
      ['30', 950],
      ['31', 810]
  ];



  idCardAndWelcomeKitHeader: string[] = ['Date', 'Lorem', 'Ipsum', 'Commodo'];

  idCardData: (string | number)[][] = [
      ['1',  1700,      1000,  500],
      ['2',  1170,      860,  400],
      ['3',  960,       720, 610],
      ['4',  1030,      740,  490],
      ['5',  1900,      675,  603],
      ['6',  1170,      864,  390],
      ['7',  660,       1120, 650],
      ['8',  1030,      540,  390],
      ['9',  400,       790,  450],
      ['10',  400,       640,  450],
      ['11',  1700,      909,  1000],
      ['12',  1370,      1060,  900],
      ['13',  660,       980, 600],
      ['14',  1030,      540,  800],
      ['15',  1000,      700,  450],
      ['16',  1170,      865,  408],
      ['17',  760,       691, 551],
      ['18',  990,      1009,  550],
      ['19',  700,       740,  400],
      ['20',  990,       940,  550],
      ['21',  1700,      917,  673],
      ['22',  1170,      560,  400],
      ['23',  660,       425, 900],
      ['24',  1130,      440,  890],
      ['25',  1400,      691,  390],
      ['26',  1170,      460,  400],
      ['27',  660,       793, 650],
      ['28',  1030,      540,  400],
      ['29',  900,       440,  950],
      ['30',  400,       440,  450],
      ['31',  800,       390,  650]
  ];


  welcomeKitData: (string | number)[][] = [
      ['1',  1700,      400,  1000],
      ['2',  660,       1120, 900],
      ['3',  1370,      760,  900],
      ['4',  1700,      400,  1000],
      ['5',  660,       1120, 900],
      ['6',  1000,      390,  1900],
      ['7',  1030,      540,  400],
      ['8',  1030,      540,  800],
      ['9',  1000,      780,  450],
      ['10',  1170,      460,  400],
      ['11',  1170,      460,  400],
      ['12',  1170,      460,  400],
      ['13',  660,       1120, 900],
      ['14',  1170,      460,  400],
      ['15',  660,       1120, 650],
      ['16',  1030,      540,  390],
      ['17',  400,       740,  450],
      ['18',  400,       740,  450],
      ['19',  660,       1120, 650],
      ['20',  1130,      440,  890],
      ['21',  900,       440,  950],
      ['22',  400,       740,  450],
      ['23',  1700,      400,  1000],
      ['24',  1030,      540,  800],
      ['25',  1900,      400,  1000],
      ['26',  390,      1000,  550],
      ['27',  1170,      460,  400],
      ['28',  660,       1120, 650],
      ['29',  400,       740,  450],
      ['30',  490,       940,  950],
      ['31',  800,       440,  650]
  ];


  getNewMemberHeader() {
      return this.newMemberHeader;
  }  
  
  getNewMemberData(startDate: any, endDate: any) {
      let tempData = [];
      for (let i = 0; i < this.newMemberData.length; i++) {
        if (Number(this.newMemberData[i][0]) >= startDate && Number(this.newMemberData[i][0]) <= endDate) {
          tempData.push(this.newMemberData[i]);
        }
      }
      return tempData;
  }

  getIdCardAndWelcomeKitHeader() {
      return this.idCardAndWelcomeKitHeader;
  }

  getIdCardData(startDate: any, endDate: any) {
      let tempData = [];
      for (let i = 0; i < this.idCardData.length; i++) {
        if (Number(this.idCardData[i][0]) >= startDate && Number(this.idCardData[i][0]) <= endDate) {
          tempData.push(this.idCardData[i]);
        }
      }
      return tempData;
  }

  getWelcomeKitData(startDate: any, endDate: any) {
    let tempData = [];
    for (let i = 0; i < this.welcomeKitData.length; i++) {
      if (Number(this.welcomeKitData[i][0]) >= startDate && Number(this.welcomeKitData[i][0]) <= endDate) {
        tempData.push(this.welcomeKitData[i]);
      }
    }
    return tempData;
  }

}