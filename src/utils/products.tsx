import pr1 from "../assets/products/Cana_1.png"
import pr1_2 from "../assets/products/Cana_1_2.png"
import pr1_3 from "../assets/products/Cana_1_3.png"
import pr2 from "../assets/products/Bricheta.png"
import pr3 from "../assets/products/Termos_cana_400.png"
import pr3_1 from "../assets/products/Termos_cana_400_2.png"
import pr4 from "../assets/products/Tricou.png"
import pr5 from "../assets/products/hanorac.png"
import pr6 from "../assets/products/Agenda_alb.png"
export const products = [
    {
      id: "1",
      name: "Cana",
      description: "Cani de 350ml. Fabricate din ceramica cu finisare mata spre deosebire de clasicele cani lucioase. Compatibila cu cuptorul cu microunde si cu masinile de spalat vase",
      price: 30,
      inStock: true,
      images: [pr1,pr1_2,pr1_3],
    },
    {
        id: "2",
        name: "Bricheta",
        description: "Brichetă metalică tip Zippo un cadou special dar și util, gata personalizate cu grafică și text așa încât ție să îți rămână doar să oferi cadoul Daca doresti poti adauga o poza pe verso. Bricheta este ambalata într-o cutiuță metalică elegantă și este încărcată cu gaz pentru a putea fi folosită imediat ce a fost primită. Poate fi reincarcata de nenumarate ori. ",
        price: 50,
        inStock: true,
        images: [pr2],
      },
      {
        id: "3",
        name: "Termos 400ml",
        description: "Transforma aceasta cana termos intr-un cadou cu adevarat special! Poti personaliza cana cu un nume, un mesaj inspirational, o data importanta sau logo-ul companiei tale. Spune-ne cum vrei sa arate termosul tau!",
        price: 30,
        inStock: true,
        images: [pr3,pr3_1],
      },
      {
        id: "4",
        name: "Tricou",
        description: "Tricouri Personalizate cu pozele și mesajele tale sau cu mesaje predefinite, surprinde-ţi prietenii cu un cadou personalizat special!Alege un cadou inspirat și creativ pentru orice sărbătorit. Te ajutăm să personalizezi tricoul așa cum dorești tu.Tricouri Personalizate – alegerea perfectă pentru aniversarii.Tricourile sunt din material de calitate, rezultatul fiind uimitor pentru cumpărător. Un mare avantaj este pretul accesibil.",
        price: 45,
        inStock: true,
        images: [pr4],
      },
      {
        id: "5",
        name: "Hanorac",
        description: "Pentru dame sau pentru bărbați, la noi găsești orice hanorace personalizate cu poza ta sau cu un model la alegere la prețuri avantajoase. Ne pasă de ceea ce îți dorești, astfel că în oferta noastră găsești hanorace de bărbați personalizate până la cel mai mic detaliu, care pot fi purtate cu blugi, într-o ținută casual și mai mult decât confortabilă.",
        price: 70,
        inStock: true,
        images: [pr5],
      },
      {
        id: "6",
        name: "Agenda",
        description: "Agenda este disponibilă atât în varianta datată pentru 2025, cât și nedatată, oferind flexibilitate pentru diverse tipuri de organizare. Indiferent de varianta aleasă, această agendă devine un instrument practic și estetic pentru orice angajat, colaborator sau partener de afaceri.",
        price: 40,
        inStock: true,
        images: [pr6],
      },
    
  ];