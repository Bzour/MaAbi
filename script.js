// const baseUrl = "file:///C:/Users/jlelo/OneDrive/Documents/Jean/Code/PourMaAbi/";

function yyymmdd(d) {
  var mm = d.getMonth() + 1; // getMonth() is zero-based
  var dd = d.getDate();

  return [d.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};

class Mot {
    constructor (mot, date, img) {
        this.mot = mot;
        this.date = new Date(Date.parse(date));
        this.imgUrl = img;
    }

    get htmlRepresentation() {

        let date = 1900 + this.date.getYear() + "/" + this.date.getMonth() + "/" + + this.date.getDate();

        return `
            <div class="card">
                <img src="${this.imgUrl}" class="card__image" alt="brown couch" />
                <div class="card__content">
                    <time datetime="${date}" class="card__date">${date}</time>
                    <span class="card__title">${this.mot}<span>
                </div>
            </div>
        `;
    }
}

class Mots {
    constructor() {
        this.mots = new Array();
        this.nb = 10;
    }

    addMot(mot, date, url) {
        this.mots.push(new Mot(mot, date, url));
    }

    get derniersMotsAsHtml() {
        let a = this.mots.sort(x => x.date);
        return (this.mots.sort((x, y) => x.date < y.date).filter(x => x.date <= Date.now()).slice(0, this.nb)).map(x => x.htmlRepresentation).join('');
    }


}

let mots = new Mots();

mots.addMot("Ma chérie. Je ne veux pas que tu perde courage, chaque jours je veux que tu te réveille en te rappelant que je t'aime. Rappelle toi des boites d'alumettes ! En voici la version moderne", 
    "2021-11-21", 
    "Photos/photo_8.jpg");

mots.addMot("Cela fait 1 ans et 11 mois ma chérie. 23 Mois que je t'aime, chaque jours plus que la veille",
    "2021-11-21", 
    "Photos/photo_17.jpg");

mots.addMot("N'ai jamais peur que je t'abandonne. Ta maladie ne te rend pas moins belle à mes yeux !", 
    "2021-11-22", 
    "Photos/photo_9.jpg");

mots.addMot("J'admire le courage que tu as, le courage de rester forte malgré cette épreuve, de continuer de te soucier avant tout de ton mari et de ton Dieu.  ", 
    "2021-11-23", 
    "Photos/photo_19.jpg");

mots.addMot("Bientôt 3 ans que l'on s'aime de cette manière ; Bientôt 10 ans que nos chemins convergent, que nos choix sont guidés par l'envie, l'espoir de rester ensemble", 
    "2021-11-24", 
    "Photos/photo_15.jpg");

mots.addMot("Je ne t'oublie pas ; Je pense à toi chaque seconde. Dans mon coeur tu es avec moi.",
    "2021-11-25", 
    "Photos/photo_13.jpg");

mots.addMot("Je sais que parfois tu en doute, je sais que parfois tu en souffre. Cesses de te trouver laide, je souhaites que tu prennes mes yeux. Je souhaite que comme moi, ta beautée te subjugue.", 
    "2021-11-26", 
    "Photos/photo_6.jpg");

mots.addMot("Même si nous ne nous imaginions paxs fêter nos deux ans dans ces conditions, qu'importe ce qu'il se passe le 21, cela fait deux ans que je ne pense qu'a toi et à notre amour.", 
    "2021-11-27", 
    "Photos/photo_10.jpg");

mots.addMot("Tu t'es donnée pour les autres, et nos amis se donnent pour nous. Tu es magnifiquement entourée", 
    "2021-11-28", 
    "Photos/photo_20.jpg");

mots.addMot("Les feuilles tombent, l'automne arrive avec un souffle de vent. Mais à jamais fleuriront ces moments, ces souvenirs en devenir que nous créons chaque instant",
    "2021-11-29", 
    "Photos/photo_5.jpg");

document.getElementById("mots").innerHTML = mots.derniersMotsAsHtml;