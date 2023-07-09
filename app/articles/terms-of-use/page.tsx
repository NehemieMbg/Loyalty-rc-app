import React from 'react';

import styles from './Terms.module.scss';
import Link from 'next/link';

export default function page() {
  return (
    <div className={styles.terms}>
      <h1 className={styles['heading-title-1']}>
        Loyalty RC Termes et conditions
      </h1>

      <p>
        Le présent site internet loyalty-rc.com, est édité par Loyalty-RC,
        société par actions simplifiée, immatriculée au Registre du Commerce et
        des Sociétés de Lille Métropole, sous le numéro RCS 952 013 811, dont le
        siège est situé 38 bd Carnot, 59800 Lille.
        <br />
        <br />
        Ces termes et conditions régissent l'utilisation de nos services de
        location de véhicules. Veuillez les lire attentivement, car ils
        établissent les règles et les responsabilités pour une expérience de
        conduite agréable et sans souci. En utilisant nos services, vous
        acceptez les conditions énoncées dans ce document. Tout non-respect de
        ces termes et conditions impliquent une fin immédiate à la location ou
        des frais supplémentaires.
        <br />
        <br />
        Merci de choisir Loyalty-RC pour votre expérience de conduite
        singulière.
      </p>

      <h2 className={styles['heading-title-2']}>1. Conditions générales</h2>
      <p>
        Ces termes et conditions s'appliquent lorsque vous louez un véhicule
        chez Loyalty-RC pour la durée indiquée dans la confirmation de
        réservation. Les mêmes exigences s'appliquent à tout conducteur
        supplémentaire, le cas échéant.
        <br />
        <br />
        Loyalty-rc se réserve le droit de mettre à jour ou de modifier les
        termes et conditions à tout moment.
      </p>

      <h2 className={styles['heading-title-2']}>2. Les services</h2>
      <p>
        En louant le véhicule décrit dans le contrat de location, vous
        établissez un accord de location avec Loyalty-rc. Veuillez noter que ce
        contrat de location représente uniquement un transfert de possession du
        véhicule et non de propriété. Dans ce contrat, les termes « vous » et «
        votre » font référence à la personne qui signe le contrat de location,
        tandis que les termes « nous » et « notre » font référence à Loyalty-rc.
        <br />
        <br />
        Il est important de reconnaître que vous n'êtes pas considéré comme
        notre agent à quelque fin que ce soit. De plus, vous convenez de ne pas
        céder, déléguer ou transférer vos obligations en vertu du contrat de
        location, y compris toute partie distincte de celui-ci.
      </p>

      <h2 className={styles['heading-title-2']}>3. Conditions d'utilisation</h2>
      <h3 className={styles['heading-title-3']}>
        Toute personnes conduisant le véhicule doit:
      </h3>
      <ul className={styles['list-exception']}>
        <li>
          Être un conducteur qualifié, avec une expérience de conduite d'au
          moins deux ans pouvant varier jusqu'à cinq ans en fonction du type de
          véhicule et posséder un permis de conduire valide correspondant au
          type de véhicule à louer, conformément à nos critères d'éligibilité.
        </li>
        <li>Être âgé de minimum 20 ans durant la durée de location.</li>
        <li>
          Ne pas avoir été impliqué dans un accident responsable ou un vol
          supérieur à 2.500€ au cours des 3 dernières années.
        </li>
        <li>Ne pas avoir de condamnations automobiles en cours. </li>
        <li>Être dans la capacité de déposer un caution.</li>
        <li>
          Ne pas être sous l'influence de l'alcool, de drogues ou de toute
          autres substances susceptibles d'altérer la capacité de conduite du
          véhicule.
        </li>
      </ul>
      <p>
        Lors de votre réservation Loyalty-rc, vous serez tenu de fournir des
        informations et des documents afin de confirmer votre identité et de
        vérifier votre conformité avec nos conditions d'assurance.
      </p>
      <h3 className={styles['heading-title-3']}>
        Documents et informations à fournir pour la rédaction du contrat de
        location Loyalty-rc :
      </h3>
      <ul className={styles['list-exception']}>
        <li>Carte d’identitée</li>
        <li>Permis de conduire</li>
        <li>Adresse</li>
        <li>Justificatif de domicile</li>
        <li>Numéro de téléphone</li>
        <li>Adresse e-mail</li>
        <li>Détail de la carte de crédit ou de débit</li>
      </ul>

      <p>
        Ces exigences s'appliquent également à tous les conducteurs
        supplémentaires, le cas échéant.
        <br />
        <br />
        Vous acceptez que Loyalty-rc ait le droit de vérifier que votre permis
        ait été valablement délivré et est en règle (non suspendue, révoquée ou
        autrement restreinte de quelque manière que ce soit) comme condition
        préalable à chaque location. Nous nous réservons le droit de refuser les
        locations si nous estimons que les informations fournies ne sont pas
        fiables. Toute personne autre que vous, autorisée pour la conduite de
        notre véhicule, doit signer un formulaire de conducteur supplémentaire
        au moment de la location.
        <br />
        Nous pouvons facturer chaque conducteur supplémentaire autorisé à
        conduire la voiture, vous retrouverez cette information spécifiée sur le
        contrat de location. Vous reconnaissez que vous resterez financièrement
        responsable en vertu du contrat de location à tout moment, même si la
        voiture est conduite par un conducteur autorisé ou quelqu'un d'autre que
        vous-même.
        <br />
        Nous vous invitons à vérifier les exigences spécifiques relatives à
        chaque véhicule (sur la page de notre site internet{' '}
        <Link href="/">loyalty-rc.com </Link>du véhicule en question) avant de
        procéder à votre réservation.
        <br />
        Tous les documents doivent être présentés au moment de la prise en
        charge du véhicule et doivent être valides pour toute la durée de la
        location.
      </p>

      <h2 className={styles['heading-title-2']}>
        3.2 Interdictions d’utilisation
      </h2>
      <h3 className={styles['heading-title-3']}>
        Il est interdit par le locataire utilisant le véhicule loué de:
      </h3>
      <ul>
        <li>Fumer dans le véhicule loué.</li>
        <li>
          Transporter des animaux de compagnie, sauf autorisation préalable de
          l’agence.
        </li>
        <li>
          Modifier le véhicule loué (ajout d’acessoires, changement de
          couleur,etc.) sans autorisations préalable de l’agence.
        </li>
        <li>
          Conduire le véhicule en dehors du pays ou de la région spécifiée dans
          le contrat de location, sauf autorisation préalable de l’agence.
        </li>
        <li>Transporter des produits illégaux ou dangereux</li>
        <li>
          Prêter le véhicule loué à une autre personne qui n'apparaît pas sur le
          contrat de location.
        </li>
        <li>
          Dépasser le nombre maximal de passagers autorisés dans le véhicule
          loué.
        </li>
        <li>
          Sous-louer le véhicule à une autre personne. Seul le client nommé sur
          le contrat de location est autorisé à conduire le véhicule.
        </li>
        <li>Tracter ou pousser d’autres véhicules avec le véhicule loué.</li>
        <li>
          D’utiliser le véhicule loué pour toute participation à des événements
          sportifs tels que des courses, des rallyes ou toute autre forme de
          compétition sportive, ainsi que pour des séances d'entraînement à la
          conduite ou une conduite hors des routes autorisées.
        </li>
      </ul>

      <h2 className={styles['heading-title-2']}>3.3 Obligations</h2>
      <h3 className={styles['heading-title-3']}>
        Les obligation du locataire sont:
      </h3>
      <ul>
        <li>
          De retourner le véhicule loué dans l’état et au lieu convenu dans le
          contrat de location, sous peine de frais supplémentaires.
        </li>
        <li>
          De respecter les règles de conduite en vigueur dans le pays où il
          conduit le véhicule.
        </li>
        <li>
          De signaler immédiatement tout problème mécanique ou panne pendant la
          location.
        </li>
        <li>
          De signaler tout accident ou dommage causé au véhicule loué pendant la
          location, dès que possible avant de retourner le véhicule à l’agence.
        </li>
      </ul>

      <h2 className={styles['heading-title-2']}>
        4. Les tarifs et conditions de paiement
      </h2>
      <h2 className={styles['heading-title-2']}>4.1 Taxes applicables </h2>
      <p>
        Le locataire sera tenu responsable du coût supplémentaire de
        récupération de véhicule lorsque le véhicule est récupéré dans un
        endroit différent de l’agence de location d’origine. Ce coût
        supplémentaire est appliqué pour couvrir les frais de transport du
        véhicule jusqu’à l’agence d’origine et sera ajoutée au coût total de la
        location.
        <br />
        Nous tenons à informer nos clients que nous sommes en mesure de facturer
        des frais supplémentaires sur le carburant utilisé, après la location.
        <br />
        Nous tenons à rappeler à nos clients que le carburant utilisé doit
        correspondre aux spécifications indiquées sur le véhicule. Tout
        carburant inapproprié entraînera des frais supplémentaires pour le
        client.
      </p>

      <h2 className={styles['heading-title-2']}>4.2 Restitution du véhicule</h2>
      <p>
        Le client doit restituer le véhicule à la fin de la période de location,
        conformément aux termes du contrat de location. Les véhicules Loyalty RC
        sont fournis avec le plein d’essence, nous demandons à nos clients de
        les restituer également avec la jauge essence pleine.
        <br />
        Des frais supplémentaires peuvent être facturés pour toutes restitutions
        jauges en dessous de 100% d’essence, tardives ou dans un état de saleté
        excessive.
      </p>

      <h2 className={styles['heading-title-2']}>4.3 Frais de retard</h2>
      <p>
        En cas de retard de plus de 30 minutes sur le véhicule sélectionné, des
        frais supplémentaires correspondant à 50% du prix moyen d'une journée de
        location seront facturés. Si le retard dépasse 50 minutes, des frais
        supplémentaires équivalant à 100% du prix moyen d'une journée de
        location seront appliqués. Les frais de retard s'appliquent dès que la
        date et l'heure de retour spécifiées dans le contrat de location sont
        dépassées.
      </p>

      <h2 className={styles['heading-title-2']}>4.4 Condition de paiement</h2>
      <p>
        Le client doit fournir un mode de paiement valide au moment de la
        location. Nous pouvons demander une pré autorisation sur la carte de
        crédit du client pour couvrir le coût de la location et d'éventuels
        frais supplémentaires.
      </p>

      <h2 className={styles['heading-title-2']}>4.5 Caution</h2>
      <p>
        Le montant de la caution exigé pour la location de nos véhicules est
        déterminé en fonction de la catégorie du véhicule sélectionné par le
        client. Les modalités exactes de la caution pour chaque catégorie de
        véhicules sont détaillées dans nos tarifs et conditions et sont sujettes
        à modification sans préavis.
      </p>

      <h2 className={styles['heading-title-2']}>4.6 Frais de nettoyage</h2>
      <p>
        Veuillez noter que toute restitution de véhicule dans un état
        excessivement sale entraînera des coûts supplémentaires pour le de
        nettoyage du véhicule. Le montant de ces coûts supplémentaires sera
        déterminé en fonction de l’étendue des dommages constatés.
      </p>

      <h2 className={styles['heading-title-2']}>
        4.7 Coûts de réparation pour tout dommage causé à notre équipement ou
        véhicules
      </h2>
      <p>
        Nous tenons à informer notre clientèle que les frais de réparation
        peuvent varier de 300 euros à la totalité du montant de la caution,
        voire même entraîner une majoration en cas de dommages importants (Si
        besoin de dépanneuse,etc. Des frais supplémentaires sont réclamés au
        client).
      </p>

      <h2 className={styles['heading-title-2']}>4.8 Conditions d’annulation</h2>
      <p>
        En cas d'annulation de votre réservation après la période d'annulation
        gratuite, qui est définie comme étant 5 jours avant la date de
        réservation, à l'exclusion des jours fériés et des week-ends, Loyalty RC
        retiendra la totalité du montant de la location, en fonction des
        conditions spécifiées dans le contrat de location.
        <br />
        En cas de non-présentation pour la prise en charge du véhicule de
        location, l'agence se réserve le droit de conserver l'intégralité du
        montant de la location et d'annuler votre réservation.
      </p>

      <h2 className={styles['heading-title-2']}>
        4.9 Politique de remboursement
      </h2>
      <p>
        Paiement partiel : si vous n'avez payé qu'une partie de votre séjour à
        l'avance, le montant de votre remboursement peut être inférieur à celui
        que vous prévoyez et ne dépassera jamais ce que vous avez payé.
        <br />
        <br />
        Délai de remboursement : Nous offrons remboursement complet si une
        réservation est annulée au moins 5 jours ouvrés avant la date prévue de
        location. Votre remboursement sera crédité sur votre compte dans les 14
        jours suivants l’annulation.
        <br />
        <br />
        Heures limites d'annulation : les heures limites sont déterminées en
        fonction de l'heure locale du pays ou de la région spécifiée dans le
        contrat de location.
      </p>

      <h2 className={styles['heading-title-2']}>
        5. Les responsabilités des clients
      </h2>
      <h2 className={styles['heading-title-2']}>5.1 Utilisation</h2>
      <p>
        Si le client prévoit d’utiliser le véhicule à l’etranger, il doit en
        informer l’agence de location au moment de la location et s’acquitter
        des frais supplémentaires éventuels. Le client doit respecter les
        limites de kilométrage stipulées dans le contrat de location. Tout
        kilomètre supplémentaire sera facturé en conséquence (0.50 centimes
        d’euros par kilomètre).
      </p>

      <h2 className={styles['heading-title-2']}>5.2 Modifications</h2>
      <p>
        Toute demande de changement, de la part du client, apporté au contrat de
        location doit être acceptée par Loyalty RC. Des frais supplémentaires
        peuvent être facturés pour les modifications apportées.
      </p>

      <h2 className={styles['heading-title-2']}>
        5.3 Obligations en matière d’entretien
      </h2>
      <p>
        Le client est tenu de prendre soin du véhicule pendant la période de
        location et de s’assurer qu’il est utilisé conformément aux
        spécifications du fabricant et aux lois et réglementations en vigueur.
        Le client est responsable de tout dommage résultant d’une négligence ou
        d’une utilisation abusive du véhicule. Le client est également tenu de
        maintenir le véhicule en bon état de fonctionnement et de signaler
        immédiatement tout problème ou défaut au personnel de l’agence de
        location. Des frais supplémentaires peuvent être appliqués pour tout
        dommage résultant d’une négligence ou d’une non-conformité avec les
        obligations d’entretien.
      </p>

      <h2 className={styles['heading-title-2']}>5.4 Sécurité</h2>
      <p>
        Il est de la responsabilité du client de garantir sa propre sécurité
        ainsi que celle de ses passagers en respectant les règles de circulation
        en vigueur, en portant la ceinture de sécurité et en évitant de conduire
        sous l’influence de substances qui pourraient affecter sa capacité à
        conduire en sécurité. Le client est également tenu de signaler
        immédiatement toute panne ou tout problème mécanique constaté pendant la
        location afin que l’agence puisse prendre les mesures nécessaires pour
        garantir la sécurité de tous. En cas d’accident, le client doit
        également nous informer immédiatement et suivre les procédures d’urgence
        recommandées pour assurer la sécurité de tous les occupants du véhicule.
      </p>

      <h2 className={styles['heading-title-2']}>5.5 Conduite responsable</h2>
      <p>
        Il est de la responsabilité du client de conduire de manière responsable
        et de respecter les règles de circulation en vigueur dans le pays ou la
        région spécifiées dans le contrat de location, pendant la durée de la
        location. Tout comportement imprudent ou dangereux pendant la location
        peut entraîner la résiliation immédiate du contrat de location et la
        récupération du véhicule sans remboursement.
      </p>

      <h2 className={styles['heading-title-2']}>
        6. Les responsabilités de l’entreprise
      </h2>
      <h2 className={styles['heading-title-2']}>6.1 Garanties</h2>
      <p>
        Nous garantissons que tous les véhicules loués sont en bon état de
        fonctionnement et conformes aux exigences légales. En cas de véhicule
        défectueux lors de la location, Loyalty RC s'engage à vous proposer une
        mesure commerciale pour rectifier la situation. Si la panne ou le
        dysfonctionnement est causé par une utilisation abusive ou négligente du
        véhicule, des frais supplémentaires pourront être facturés au client.
      </p>

      <h2 className={styles['heading-title-2']}>6.2 Les réparations</h2>
      <p>
        Toutes les réparations nécessaires à la remise en état du véhicule
        pendant la période de location seront effectuées par l’agence. Le client
        ne doit en aucun cas effectuer de réparations ou de modifications sur le
        véhicule sans l’autorisation préalable de l’agence. Si le client
        effectue des réparations ou des modifications sans autorisation, il sera
        tenu responsable des frais de réparation et de tous les autres coûts
        associés.
      </p>

      <h2 className={styles['heading-title-2']}>
        7. Confidentialité et protection des données
      </h2>
      <p>
        Nous nous engageons à protéger les données personnelles de nos clients
        et à les traiter conformément aux réglementations en vigueur en matière
        de protection des données. Les informations collectées ne seront
        utilisées que dans le cadre de la location de véhicules et ne seront pas
        partagées avec des tiers, sauf pour des raisons juridiques ou
        réglementaires. Pour en savoir plus, rendez-vous sur cette page :
        [PRIVATE POLICY]
      </p>

      <h2 className={styles['heading-title-2']}>
        8. Utilisation de dispositifs de suivi GPS
      </h2>
      <p>
        Nous utilisons des dispositifs de suivi GPS pour différentes raisons,
        notamment pour localiser les véhicules en cas de retard de retour, en
        cas de déclaration de vol, de suspicion de perte, de vol, d'abandon, ou
        à la demande des forces de l'ordre. Ces dispositifs peuvent également
        être utilisés pour identifier les véhicules endommagés nécessitant une
        assistance routière. Veuillez noter qu'en utilisant nos services, vous
        acceptez qu'il n'y ait aucune atteinte de vie privée ou de
        confidentialité concernant les emplacements où le véhicule est conduit
        pendant la période de location. Ces mesures sont mises en place pour
        assurer votre sécurité et protéger nos droits en tant que prestataire de
        services de location de véhicules.
      </p>

      <h2 className={styles['heading-title-2']}>
        9. Litiges et loi applicable
      </h2>
      <p>
        En cas de litige découlant de l’utilisation des services de location, le
        client accepte de renoncer à toute réclamation contre Loyalty RC, y
        compris toute réclamation pour dommages directs, indirects, accessoires
        ou consécutifs, y compris la perte de profits, de revenus ou
        d’opportunités commerciales. La responsabilité maximale de Loyalty RC en
        cas de litige sera limitée au montant payé par l’utilisateur pour la
        location du véhicule en question. En outre, l’utilisateur s’engage à
        indemniser et à tenir l’agence de location indemne de toute réclamation,
        action ou demande, y compris les frais raisonnables d’avocats, découlant
        de l’utilisation des services de location. Tout litige sera résolu
        conformément aux lois en vigueur dans le pays ou la région spécifiées
        dans le contrat de location.
      </p>
    </div>
  );
}
