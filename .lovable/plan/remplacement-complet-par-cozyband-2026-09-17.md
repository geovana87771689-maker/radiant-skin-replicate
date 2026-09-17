# Remplacement complet par CozyBand

## Résultat attendu
- Remplacer toute la page de housse de canapé par une page produit CozyBand entièrement en français.
- Conserver la structure technique TanStack et le suivi existant, sans avis, étoiles, urgence artificielle ni allégation liée au sommeil.
- Appliquer une direction noir et blanc, minimale, mobile-first, sans défilement horizontal.

## Parcours de la page
1. Galerie tactile avec placeholders gris « IMAGE À REMPLACER », séparés pour Noir et Gris.
2. Titre, prix dynamique sans prix barré, puis la promesse exacte demandée.
3. Six arguments avec icônes fines.
4. Couleur par pastilles, puis quantité 1–4 avec 2 sélectionné par défaut, badge discret et économie dynamique.
5. Disponibilité, bouton « AJOUTER AU PANIER », puis deux barres de confiance.
6. Description longue en trois blocs, FAQ dans l’ordre imposé et garantie 30 jours.
7. Bouton d’achat fixe en bas sur mobile pendant le défilement.

## Contenu et conformité
- Supprimer tous les textes, images, avis, notes, tailles et offres liés à la housse de canapé.
- Ne faire aucune promesse de traitement, d’amélioration du sommeil, d’isolation phonique ou de stock limité.
- Garder visibles tous les champs inconnus sous la forme « À COMPLÉTER » ou « [DÉLAI À CONFIRMER] ».
- Conserver le prix de référence désactivé avec un commentaire sur la directive Omnibus.

## Détails techniques
- Centraliser le produit, les couleurs, les quantités, les arguments et la FAQ dans les données produit.
- Créer une configuration checkout dédiée associant chaque couple couleur + quantité à une URL Shopify contenant `REMPLACER_VARIANT_ID`.
- Préserver les paramètres de suivi dans l’URL externe, sans réintroduire les événements AddToCart ou InitiateCheckout supprimés précédemment.
- Remplacer la galerie par un carrousel horizontal tactile et accessible, synchronisé avec la couleur.
- Mettre à jour les métadonnées de la page et les données structurées pour CozyBand.
- Retirer les anciennes sections non demandées, y compris les avis clients et le contenu de démonstration de la housse.

## Validation
- Vérifier sur mobile et ordinateur l’ordre exact, le changement couleur/galerie, les quatre quantités, les prix et le texte d’économie.
- Vérifier le bouton fixe, l’absence de débordement horizontal et l’ouverture correcte des accordéons.
- Vérifier que les URLs de checkout contiennent le bon identifiant placeholder et conservent les paramètres de campagne.
- Rechercher toute référence restante à l’ancien produit et toute formulation interdite.

## Hypothèses explicites
- La marque affichée devient « CozyBand » avec un logo typographique de 280 × 80 px sur mobile, puisqu’aucun nouveau fichier logo n’a été fourni.
- Les mesures, la composition, les délais et l’adresse de retour restent volontairement en placeholders visibles.
