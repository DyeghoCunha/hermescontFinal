

interface ICanculaAliqEfetiva {
  rbt12: number,
  anexo: string
}
export function funcCalculaAliqEfetiva({ rbt12, anexo }: ICanculaAliqEfetiva) {
  let alqEfetiva: number;
  let faixa: any = []
  let alq: number = 0
  let pd: number = 0


  if (anexo === 'Anexo I') {
    faixa = [
      [180000, 4 / 100, 0],
      [360000, 7.3 / 100, 5940],
      [720000, 9.5 / 100, 13860],
      [1800000, 10.7 / 100, 22500],
      [3600000, 14.3 / 100, 87300],
      [4800000, 19 / 100, 378000]
    ];
  } else if (anexo === 'Anexo II') {
    faixa = [
      [180000, 4.5 / 100, 0],
      [360000, 7.8 / 100, 5940],
      [720000, 10 / 100, 13860],
      [1800000, 1.2 / 100, 22500],
      [3600000, 14.7 / 100, 85500],
      [4800000, 30 / 100, 720000]
    ];
  } else if (anexo === 'Anexo III') {
    faixa = [
      [180000, 6 / 100, 0],
      [360000, 11.2 / 100, 9360],
      [720000, 13.5 / 100, 17640],
      [1800000, 16 / 100, 35640],
      [3600000, 21 / 100, 125640],
      [4800000, 33 / 100, 648000]
    ];
  } else if (anexo === 'Anexo IV') {
    faixa = [
      [180000, 4.5 / 100, 0],
      [360000, 9 / 100, 8100],
      [720000, 10.2 / 100, 12420],
      [1800000, 14 / 100, 39780],
      [3600000, 22 / 100, 183780],
      [4800000, 33 / 100, 828000]
    ];
  } else if (anexo === 'Anexo V') {
    faixa = [
      [180000, 15.5 / 100, 0],
      [360000, 18 / 100, 4500],
      [720000, 19.5 / 100, 9900],
      [1800000, 20.5 / 100, 17100],
      [3600000, 23 / 100, 62100],
      [4800000, 30.5 / 100, 540000]
    ];
  } else {
    //console.log('Erro nos Anexos');
  }

  for (let i = 0; i < faixa.length; i++) {
    if (rbt12 < faixa[i][0]) {
      // //console.log(rbt12)
      alq = faixa[i][1];
      // //console.log(alq)
      pd = faixa[i][2];
      // //console.log(pd)
      alqEfetiva = (((rbt12 * alq)) - pd) / rbt12;
      return (alqEfetiva * 100);
    }
  }
  return null;
}


interface ICalculaImpostoDetalhado {
  faturamento: number,
  anexo: string,
  alqEfetiva: number | null,
  rbt12: number
}

export function funcCalculaImpostoDetalhado({ faturamento, anexo, alqEfetiva, rbt12 }: ICalculaImpostoDetalhado): any {
  let impostos: { [key: string]: number } = {
    "IR": 0,
    "CSLL": 0,
    "PIS": 0,
    "COFINS": 0,
    "CPP": 0,
    "ICMS": 0,
    "ISS": 0,
    "IPI": 0
  };

  let faixa: any = []

  if (anexo == 'Anexo I') {
    faixa = [
      [180000, 0.0550, 0.0350, 0.0276, 0.1274, 0.4150, 0.3400, 0, 0],
      [360000, 0.0550, 0.0350, 0.0276, 0.1274, 0.4150, 0.3400, 0, 0],
      [720000, 0.0550, 0.0350, 0.0276, 0.1274, 0.4200, 0.3350, 0, 0],
      [1800000, 0.0550, 0.0350, 0.0276, 0.1274, 0.4200, 0.3350, 0, 0],
      [3600000, 0.0550, 0.0350, 0.0276, 0.1274, 0.4200, 0.3350, 0, 0],
      [4800000, 0.1350, 0.1000, 0.0613, 0.2827, 0.4210, 0.0000, 0, 0]
    ];
  } else if (anexo == 'Anexo II') {
    faixa = [
      [180000, 0.0550, 0.0350, 0.0249, 0.1151, 0.3750, 0.3200, 0, 0.0750],
      [360000, 0.0550, 0.0350, 0.0249, 0.1151, 0.3750, 0.3200, 0, 0.0750],
      [720000, 0.0550, 0.0350, 0.0249, 0.1151, 0.3750, 0.3200, 0, 0.0750],
      [1800000, 0.0550, 0.0350, 0.0249, 0.1151, 0.3750, 0.3200, 0, 0.0750],
      [3600000, 0.0550, 0.0350, 0.0249, 0.1151, 0.3750, 0.3200, 0, 0.0750],
      [4800000, 0.0850, 0.0750, 0.0454, 0.2096, 0.2350, 0.0000, 0, 0.0750]
    ];
  } else if (anexo == 'Anexo III') {
    faixa = [
      [180000, 0.0400, 0.0350, 0.0278, 0.1282, 0.4340, 0.0000, 0.3350, 0.000],
      [360000, 0.0400, 0.0350, 0.0305, 0.1405, 0.4340, 0.0000, 0.3200, 0.000],
      [720000, 0.0400, 0.0350, 0.0296, 0.1364, 0.4340, 0.0000, 0.3250, 0.0000],
      [1800000, 0.0400, 0.0350, 0.0296, 0.1364, 0.4340, 0.0000, 0.3250, 0.0000],
      [3600000, 0.0400, 0.0350, 0.0296, 0.1282, 0.4340, 0.0000, 0.3350, 0.0000],
      [4800000, 0.3500, 0.1500, 0.0347, 0.1603, 0.3050, 0.0000, 0.0000, 0.0000]
    ];
  } else if (anexo == 'Anexo IV') {
    faixa = [
      [180000, 0.1880, 0.1520, 0.0383, 0.1767, 0.0000, 0.0000, 0.4450, 0],
      [360000, 0.1980, 0.1520, 0.0445, 0.2055, 0.0000, 0.0000, 0.4000, 0],
      [720000, 0.2080, 0.1520, 0.0427, 0.1973, 0.0000, 0.0000, 0.4000, 0],
      [1800000, 0.1780, 0.1920, 0.0410, 0.1890, 0.0000, 0.0000, 0.4000, 0],
      [3600000, 0.1880, 0.1920, 0.0392, 0.1808, 0.0000, 0.0000, 0.4000, 0],
      [4800000, 0.2150, 0.2150, 0.0445, 0.2055, 0.0000, 0.0000, 0.0000, 0]
    ];
  } else if (anexo == 'Anexo V') {
    faixa = [
      [180000, 0.2500, 0.1500, 0.0305, 0.1410, 0.2885, 0.0000, 0.1400, 0],
      [360000, 0.2300, 0.1500, 0.0305, 0.1410, 0.2785, 0.0000, 0.1700, 0],
      [720000, 0.2400, 0.1500, 0.0323, 0.1492, 0.2385, 0.0000, 0.1900, 0],
      [1800000, 0.2100, 0.1500, 0.0341, 0.1574, 0.2385, 0.0000, 0.2100, 0],
      [3600000, 0.2300, 0.1250, 0.0305, 0.1410, 0.2385, 0.0000, 0.2350, 0],
      [4800000, 0.3500, 0.1550, 0.0356, 0.1644, 0.2950, 0.0000, 0.0000, 0]
    ];
  } else {
    //console.log('Erro nos Anexos');
  }

  for (let i = 0; i < faixa.length; i++) {
    if (rbt12 < faixa[i][0] && alqEfetiva) {
      impostos["IR"] = faturamento * ((alqEfetiva / 100) * faixa[i][1]);
      impostos["CSLL"] = faturamento * ((alqEfetiva / 100) * faixa[i][2]);
      impostos["PIS"] = faturamento * ((alqEfetiva / 100) * faixa[i][3]);
      impostos["COFINS"] = faturamento * ((alqEfetiva / 100) * faixa[i][4]);
      impostos["CPP"] = faturamento * ((alqEfetiva / 100) * faixa[i][5]);
      impostos["ICMS"] = faturamento * ((alqEfetiva / 100) * faixa[i][6]);
      impostos["ISS"] = faturamento * ((alqEfetiva / 100) * faixa[i][7]);
      impostos["IPI"] = faturamento * ((alqEfetiva / 100) * faixa[i][8]);
      return impostos;
    }
  }
  return null;
}