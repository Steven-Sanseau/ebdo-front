import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Footer from 'components/Footer'
import styled from 'styled-components'
import { media } from 'global-styles'

import NavBar from 'components/NavBar'

const Layout = styled.div`
  width: calc(100% - 80px);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet`
    padding: 40px 0;
  `};
`

const IntroWrap = styled.div`
  padding-top: 100px;
  padding-bottom: 30px;
  background-color: var(--pale-grey);
  color: white;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    max-width: 450px;
    font-size: 18px;
  }
`
const TextWrap = styled(Col)`
  padding-top: 100px;
  padding-bottom: 100px;
  p {
    font-weight: 700;
    font-size: 18px;
  }
`
function LegalPage(props) {
  return (
    <div>
      <NavBar
        dispatch={props.dispatch}
        isFixed
        page={props.page}
        isLoggedIn={props.isLoggedIn}
      />
      <IntroWrap>
        <Layout>
          <Row>
            <Col xs={12} sm={6}>
              <h2>Conditions générales de ventes</h2>
            </Col>
          </Row>
        </Layout>
      </IntroWrap>
      <Layout>
        <Row between="sm">
          <TextWrap xs={12} sm={6} smOffset={3}>
            <p>
              Ebdo est une marque de Rollin Publications - société par actions
              simplifiée au capital de 46 506€ dont le siège social est situé 27
              rue Jacob 75006 Paris, immatriculée au registre du commerce et des
              sociétés de Paris sous le numéro B 499 502 870.
            </p>
            <h2>Article 1 : l’objet</h2>
            Les présentes conditions régissent exclusivement les ventes
            d'abonnements au magazine Ebdo proposées sur le site
            ebdo-lejournal.com (ci-après le Site). Les parties conviennent que
            leurs relations seront régies exclusivement par les présentes
            conditions générales de vente. Toute validation de souscription d’un
            abonnement sur le site implique l’adhésion totale et sans réserve
            aux présentes conditions générales ainsi que la capacité juridique
            pour souscrire sur le site. Rollin Publications se réserve la
            faculté de modifier ses Conditions Générales à tout moment, sans
            préavis. Les internautes sont invités à les consulter régulièrement.
            En cas de modifications, les conditions applicables sont celles en
            vigueur sur le Site à la date de passation de commande. Article 2 :
            les offres d'abonnement Les différentes offres d'abonnement sont
            présentées sur le site ebdo-lejournal.com Les offres en vigueur sont
            celles affichées sur le site au jour de l'enregistrement de la
            commande, Ebdo se réservant le droit de les modifier à tout moment.
            Ebdo propose sur son site 3 formules d’abonnement magazine : “Je
            reçois tous les mois...” : offre d’abonnement à durée libre sans
            aucun engagement de durée. “Je reçois pendant X mois...” : offre
            d’abonnement à durée déterminée, X pouvant être 3, 6 ou 12 mois. Pas
            de reconduction automatique. “J’offre X mois…” : offre d’abonnement
            à durée déterminée, X pouvant être 3, 6 ou 12 mois. Destinée à être
            offerte. Pas de reconduction automatique. Les formules “Je reçois”
            sont réservées à la France métropolitaine, la Belgique, la Suisse et
            le Luxembourg. La formule “J’offre” est réservée à la France
            métropolitaine. Ebdo propose une formule d’essai gratuit de son
            magazine : “J’essaye” : Ebdo envoie un numéro gratuit à découvrir
            sans engagement. Cette offre est réservée aux personnes qui n’ont
            jamais été abonnées. Elle existe dans le but de faire découvrir le
            magazine à tous ceux qui hésitent, et ne constitue en aucun cas un
            moyen de se procurer le magazine gratuitement. Nous comptons sur
            vous pour profiter de cette offre en bonne intelligence,
            c’est-à-dire une seule fois au maximum. En cas d’abus, nous serons
            dans l’obligation de supprimer cette offre, nous en appelons donc à
            votre responsabilité pour permettre à Ebdo de conserver cette
            possibilité et ainsi permettre au plus grand nombre de profiter du
            magazine.
            <h2>Article 3 : Modalités de souscription de l’abonnement</h2>
            La validation de la demande d'abonnement vaut acceptation des
            présentes conditions générales de vente, l'interface d'abonnement en
            ligne obligeant par ailleurs l'abonné à accepter formellement ces
            conditions générales. A compter de la validation définitive de votre
            achat, vous recevrez un email de confirmation, à l’adresse
            électronique que vous aurez indiquée sur le site, récapitulant
            l’ensemble des éléments relatifs à votre souscription d’abonnements.
            Les registres informatisés et conservés dans nos systèmes
            informatiques dans des conditions raisonnables de sécurité seront
            considérés comme une preuve de commande et de paiement intervenus.
            Les données enregistrées par le système de paiement constituent la
            preuve des transactions financières, sauf preuve contraire. Ebdo se
            réserve le droit de refuser toute commande d'un utilisateur avec
            lequel existerait un litige de paiement relatif à une offre
            commercialisée par Ebdo, sans que celui-ci puisse prétendre à une
            quelconque indemnité à quelque titre que ce soit.
            <h2>Article 4 : Prix et modalités de paiement</h2>
            Les prix en vigueur des différentes offres d'abonnement sont ceux
            affichés sur le site au jour de l'enregistrement de la commande,
            Ebdo se réservant le droit de les modifier à tout moment. Ils sont
            indiqués en euros, toutes taxes et participation aux frais de
            traitement et d'expédition comprises pour la France (les frais de
            port additionnels pour l'étranger sont clairement mentionnés).
            Toutes les commandes sont payables en euros. Le tarif des
            abonnements est celui en vigueur au jour de leur souscription. Une
            modification éventuelle du tarif des abonnements est donc sans
            conséquence sur l’abonnement en cours. Vous avez le choix, selon les
            offres proposées, de souscrire soit un abonnement à durée déterminée
            payable en totalité au moment de la validation de la souscription de
            l’abonnement, soit un abonnement sans aucun engagement de durée,
            payable mensuellement. Deux modalités de paiement sont proposées :
            1. Paiement par carte bancaire par serveur de paiement sécurisé : Le
            paiement en ligne par carte bancaire est assuré par Stripe, une
            solution sécurisée qui intègre un procédé de cryptage en mode SSL
            (Secure Socket Layer). Stripe est le leader mondial des paiements en
            ligne et utilise les moyens de sécurité les plus avancés. Pour en
            savoir plus : https://stripe.com/docs/security/stripe Rollin
            Publications - Ebdo ne stocke pas l’intégralité du numéro de carte
            bancaire sur ses serveurs informatiques. Les numéros de carte
            bancaire sont traités par Stripe et les transactions avec Rollin
            Publications - Ebdo se font à partir de numéro d'autorisation, de
            numéro de transaction et d’identifiant commerçant. Les coordonnées
            de la carte de crédit de l’abonné ne transitent jamais en clair sur
            le réseau. Les cartes bancaires acceptées par les systèmes de
            paiement sont les cartes bleues, Visa et MasterCard. Dans le cadre
            d'un paiement pour un abonnement à durée libre par carte bancaire,
            il appartient à l'utilisateur dont la durée de validité de la carte
            bancaire a expiré de contacter le service client et de fournir les
            coordonnées de carte bancaire valides afin de continuer à recevoir
            son magazine A défaut, l'abonnement sera suspendu. 2. Paiement par
            prélèvement automatique SEPA : Dans le cadre de l’harmonisation des
            systèmes bancaires européens, nous appliquons le système SEPA
            (Single Euro Payments Area) avec signature électronique. Les
            paiements sont traités par Slimpay, la plateforme leader en Europe
            des paiements SEPA. Pour en savoir plus :
            https://www.slimpay.com/fr/ Pour une commande passée sur le site
            ebdo-lejournal.com, choisissez-e mode de règlement « Paiement par
            prélèvement bancaire », puis renseignez vos informations bancaires :
            nom du titulaire du compte, IBAN et BIC. En cliquant sur le bouton «
            Validez » (serveur sécurisé), vous êtes automatiquement redirigé
            vers la plateforme Slimpay sur laquelle il vous est demandé de
            renseigner votre IBAN. Il vous est ensuite demandé votre numéro de
            téléphone portable afin de confirmer la transaction. Vous recevez un
            SMS avec un code, en l’entrant dans le formulaire, vous confirmez
            ainsi le mandat de prélèvement automatique qui autorisera Rollin
            Publications, éditeur de Ebdo, à prélever votre compte selon la
            formule d’abonnement choisie. Dans le cadre d'un changement de
            coordonnées bancaires, l'utilisateur doit transmettre son nouvel
            IBAN au Service relations abonnés. Ce dernier enregistrera les
            nouvelles coordonnées bancaires qui seront rattachées au mandat de
            prélèvement. En cas de rejet du prélèvement, Ebdo se réserve le
            droit de demander le règlement de la somme due par tout autre moyen
            de paiement. A défaut de règlement effectif dans un délai de quinze
            jours au maximum à compter de sa souscription, Ebdo aura la
            possibilité de résilier de plein droit la commande ou l'abonnement
            souscrit, sans préjudice de son droit de demander le règlement de sa
            créance pour la période écoulée. Le règlement des abonnements
            magazines s’effectue mensuellement en fonction du tarif d’abonnement
            auquel vous avez souscrit.
            <h2>
              Article 5 : Mise en place de l’abonnement - Livraison du journal
              papier
            </h2>
            La mise en service d'un abonnement papier prend effet dès réception
            du premier numéro servi. Les magazines sont livrés à l'adresse de
            livraison que vous aurez indiquée lors de votre commande et le délai
            moyen de livraison du premier numéro est de 10 à 15 jours environ
            après enregistrement de votre règlement. Les horaires et délais de
            livraison sont ceux pratiqués habituellement par les services
            postaux, Rollin Publications déclinant toute responsabilité en cas
            de défaut et/ou retard d'acheminement des publications causé par un
            dysfonctionnement total ou partiel du service postal. Article 6 :
            Service Clientèle Notre service client est à votre disposition pour
            tout renseignement ou question. Afin de vous apporter une réponse la
            plus efficace possible, vos nom et adresse postale, voire votre
            numéro d'abonné nous seront utiles : Ebdo Service abonnement 6, rue
            d’Ouessant 35760 Saint Grégoire email à l’adresse suivante :
            abo@ebdo-lejournal.com Tél : 01 76 41 05 95 du lundi au vendredi de
            9h à 12h et de 14h à 17h
            <h2>ARTICLE 7 : Droit de rétractation</h2>
            Délai de rétractation : Conformément à l’article L.121-21 du Code de
            la consommation, vous disposez d’un délai de quatorze (14) jours
            francs à compter de la souscription du contrat d’abonnement pour
            exercer votre droit de rétractation, sans pénalité ni justificatif.
            Modalités d’exercice : Pour exercer ce droit de rétractation, vous
            devez nous notifier votre décision au moyen d’une déclaration par
            courrier à l’adresse suivante : Ebdo - Service abonnement 6, rue
            d’Ouessant 35760 Saint Grégoire Ou par email à l’adresse suivante :
            abo@ebdo-lejournal.com Vous devez nous notifier votre décision au
            moyen d’une déclaration dénuée d’ambiguïté. Nous vous invitons à
            utiliser ce modèle de formulaire de rétractation : (Merci de
            recopier/compléter et de renvoyer le formulaire ainsi que votre
            numéro de commande uniquement si vous souhaitez vous rétracter du
            contrat.) Je/Nous* vous notifie/notifions par la présente ma/notre*
            rétractation du contrat portant sur la vente du contrat de service
            d’abonnement/le produit__________ ci-dessous : Commandé le
            [……………………………….] (*) reçu le [………………………….……….] (*) Numéro de la
            commande : […………………………………..……………………] Nom du (des) consommateur(s)* :
            [………………………………………………………………] Adresse du (des) consommateur(s)* :
            [……………………………………………………………… ……………………………………………………………………………………………………]
            Signature du (des) consommateur(s) (uniquement en cas de
            notification du présent formulaire sur papier) Retour des produits :
            ce droit de rétractation s’exerce sans pénalité, à l’exception des
            frais de retour qui restent à votre charge. Afin d’assurer le suivi
            de son colis, l’utilisateur devra effectuer son retour en Colissimo
            suivi. Vous devrez renvoyer le(s) produit(s) concerné(s) à l’adresse
            RETOURS EBDO C/O TBS BLUE - 6, rue d’Ouessant 35760 Saint Grégoire,
            sans retard excessif et, en tout état de cause, au plus tard
            quatorze (14) jours après que vous nous aurez communiqué votre
            décision de rétractation. Ce délai est réputé respecté si vous
            renvoyez le bien avant l’expiration du délai de quatorze (14) jours.
            En cas d’exercice de votre rétractation, nous vous rembourserons le
            montant de votre commande au plus tard quatorze (14) jours à compter
            du jour où nous sommes informés de votre décision de vous rétracter.
            Lorsque le délai de quatorze (14) jours expire un samedi, un
            dimanche ou un jour férié ou chômé, il est prorogé jusqu'au premier
            jour ouvrable suivant.
            <h2>ARTICLE 8 : RESILIATION D’UN ABONNEMENT</h2>
            Au-delà du droit de rétractation, vous pouvez résilier votre
            abonnement : - en cas d’abonnement sans engagement de durée : à tout
            moment ; Il suffit d’adresser une demande en écrivant à Ebdo
            -Service abonnement 6, rue d’Ouessant 35760 Saint-Grégoire Ou par
            email à l’adresse suivante : abo@ebdo-lejournal.com La résiliation
            sera effective sous trente (30) jours. Un message de confirmation de
            la résiliation vous sera envoyé. Si tel n’est pas le cas, merci de
            contacter le Service Client. - en cas d’abonnement à durée
            déterminée : L'abonné peut résilier son contrat d'abonnement à durée
            déterminée en cas de manquement grave par Ebdo à ses obligations,
            trente (30) jours après une mise en demeure d'exécuter, signifiée
            par lettre recommandée avec demande d'avis de réception restée sans
            effet. Cette lettre recommandée avec accusé de réception doit être
            adressée au service abonnements. Ni l'abonné ni Ebdo ne seront tenus
            responsables l'un envers l'autre de la non exécution ou d'un retard
            dans l'exécution d'une obligation contenue dans les présentes
            conditions générales de vente et d'utilisation et/ou dans le contrat
            d'abonnement, consécutif à la survenance d'un cas de force majeure,
            tel que reconnue par la jurisprudence des tribunaux français. Le cas
            de force majeure suspend les obligations nées des présentes
            conditions générales de vente et d'utilisation et/ou du contrat
            d'abonnement pendant toute sa durée. Toutefois, si le cas de force
            majeure a une durée d'existence supérieure à soixante-douze (72)
            heures consécutives, l'abonnement pourra être résilié par l'Abonné
            par lettre recommandée avec demande d'avis de réception adressée au
            Service Clients. L'arrivée du terme ou la résiliation du contrat
            d'abonnement entraîne la suppression de l'accès de l'Abonné à son
            abonnement. Toutefois, l'abonné conserve les données de son profil
            en tant qu'utilisateur enregistré.
            <h2>Article 9 : Responsabilité – garantie</h2>
            Les produits proposés sont conformes à la législation française en
            vigueur. Les photographies et les textes reproduits et illustrant
            les Produits présentés ne sont pas contractuels. En conséquence, la
            responsabilité de Rollin Publications ne saurait être engagée en cas
            d'erreur dans l'une de ces photographies ou l'un de ces textes.
            Rollin Publications ne saurait être tenu pour responsable de
            l'inexécution du contrat conclu avec l’utilisateur, en cas de force
            majeure, de dysfonctionnement, perturbation ou grève totale ou
            partielle notamment des moyens de distribution. En application de
            l'article 1124 du Code Civil, les mineurs non émancipés sont
            incapables de contracter. Il est précisé que les mineurs ne peuvent
            fournir ces informations qu'avec l’accord des personnes titulaires
            de l’autorité parentale. L'utilisation du site par un mineur reste
            sous l'entière responsabilité des personnes détenant l’autorité
            parentale. En conséquence, Rollin Publications ne saurait être tenu
            responsable en cas de collecte à son insu de données nominatives
            relatives à un mineur.
            <h2>Article 10. Propriété intellectuelle</h2>
            Toutes les informations mises à disposition sur le site, et, plus
            généralement, tout ou partie du site lui-même sont réservés au titre
            du droit d'auteur et/ou de la propriété intellectuelle et ce, pour
            le monde entier. Les présentes conditions générales de vente
            n’entraînent le transfert d’aucun de ces droits de propriété
            intellectuelle au profit d’un utilisateur quel qu’il soit. En
            conséquence, ce dernier s’interdit de reproduire et/ou utiliser les
            marques et logos présents sur le site. L’utilisateur s’interdit
            également de copier, modifier, traduire, reproduire, diffuser,
            vendre, publier, exploiter de toute autre manière et diffuser dans
            un autre format sous forme électronique ou autres tout ou partie des
            informations (même partiellement) présentes sur le site. Tous les
            textes, commentaires, ouvrages, illustrations et images utilisés sur
            les pages du service sont protégés au titre du droit de la propriété
            intellectuelle pour la France et/ou pour le monde entier.
            Conformément aux dispositions du Code de la propriété
            intellectuelle, seule l'utilisation pour un usage privé est
            autorisée à l'exclusion de toute autre utilisation, sous réserve de
            dispositions différentes voire plus restrictives du code de la
            propriété intellectuelle. Toute commercialisation, sous quelque
            forme que ce soit, de tout ou partie du contenu du site est
            interdite. Toute autre utilisation, sauf autorisation préalable de
            Rollin Publications et/ou des autres ayants droit, est constitutive
            de contrefaçon et sanctionnée au titre de la propriété
            intellectuelle. Toute reproduction totale ou partielle de tout ou
            partie des éléments présents sur les pages des Services non
            autorisée est strictement interdite.
            <h2>ARTICLE 11 : Confidentialité et sécurité</h2>
            Rollin Publications met en œuvre tous les moyens pour assurer la
            confidentialité et la sécurité des données transmises sur Internet.
            L’ensemble des plateformes tierces auxquelles nous faisons appel
            font l’objet d’audits de sécurité sérieux. Si vous constatez des
            points à améliorer n’hésitez pas à nous contacter à ce sujet.
            <h2>ARTICLE 12 : Protection des données personnelles</h2>
            Ebdo demande à tout utilisateur de communiquer un certain nombre
            d'informations personnelles appelées « données personnelles » : nom,
            prénom, adresse électronique, adresse postale, etc. afin d'être en
            mesure de l'identifier, de le faire bénéficier des services auxquels
            il est abonné ou de lui proposer des services personnalisés.
            Conformément à la loi du 6 janvier 1978 modifiée, l'utilisateur
            dispose d'un droit d'accès, d'opposition et de rectification des
            données le concernant, soit directement sur Internet, soit par
            courrier en écrivant à : Ebdo -Service abonnement 6, rue d’Ouessant
            35760 Saint Grégoire Ou par email à l’adresse suivante :
            abo@ebdo-lejournal.com
            <h2>ARTICLE 13 : Loi applicable et juridiction compétente</h2>
            Les présentes conditions générales sont régies et soumises au droit
            français. Elles sont rédigées en langue française. En cas de
            difficulté relative à l'interprétation et/ou à l'application des
            présentes conditions générales, les parties essaieront, dans toute
            la mesure du possible, de résoudre leur litige à l'amiable. En cas
            d'échec de ces tentatives, les parties soumettront le litige aux
            tribunaux français compétents de Paris même en cas de pluralité des
            défendeurs ou d'appel de garantie.
            <h3>Annexe A</h3>
            Article L. 211-4 du Code de la consommation Le vendeur est tenu de
            livrer un bien conforme au contrat et répond des défauts de
            conformité existant lors de la délivrance. Il répond également des
            défauts de conformité résultant de l'emballage, des instructions de
            montage ou de l'installation lorsque celle-ci a été mise à sa charge
            par le contrat ou a été réalisée sous sa responsabilité. Article L.
            211-5 du Code de la consommation Pour être conforme au contrat, le
            bien doit : 1° - Etre propre à l'usage habituellement attendu d'un
            bien semblable et, le cas échéant : - correspondre à la description
            donnée par le vendeur et posséder les qualités que celui-ci a
            présentées au client sous forme d'échantillon ou de modèle -
            présenter les qualités qu'un acheteur peut légitimement attendre eu
            égard aux déclarations publiques faites par le vendeur, par le
            producteur ou par son représentant, notamment dans la publicité ou
            l'étiquetage 2° - Ou présenter les caractéristiques définies d'un
            commun accord par les parties ou être propre à tout usage spécial
            recherché par le client, porté à la connaissance du vendeur et que
            ce dernier a accepté. Article L. 211-12 du Code de la consommation
            L'action résultant du défaut de conformité se prescrit par deux ans
            à compter de la délivrance du bien. ANNEXE B (formulaire annexe à
            l'article R. 121-1 du Code de la consommation) MODÈLE DE FORMULAIRE
            DE RÉTRACTATION (Veuillez compléter et renvoyer le présent
            formulaire uniquement si vous souhaitez vous rétracter du contrat.)
            A l'attention de Ebdo - Service abonnement 6, rue d’Ouessant 35760
            Saint-Grégoire - Insérer numéro de télécopieur et adresse
            électronique : - Je/nous (*) vous notifie/notifions (*) par la
            présente ma/notre (*) rétractation du contrat portant sur la vente
            du bien (*)/pour la prestation de services (*) ci-dessous : -
            Commandé le (*)/reçu le (*) : - Nom du (des) consommateur(s) : -
            Adresse du (des) consommateur(s) : - Signature du (des)
            consommateur(s) (uniquement en cas de notification du présent
            formulaire sur papier) : - Date :
          </TextWrap>
        </Row>
      </Layout>
      <Footer dispatch={props.dispatch} />
    </div>
  )
}

LegalPage.propTypes = {
  dispatch: PropTypes.func,
  page: PropTypes.string
}

export default LegalPage
