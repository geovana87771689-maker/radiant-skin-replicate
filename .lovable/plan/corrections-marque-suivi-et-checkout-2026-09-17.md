# Corrections marque, suivi et checkout

## Résultat attendu
- Afficher lépuremaison comme marque de la boutique dans l’en-tête, le pied de page et les métadonnées, tout en conservant CozyBand comme nom du produit.
- Charger uniquement le code de base Meta avec `PageView`, depuis un identifiant centralisé et clairement remplaçable.
- Conserver les paramètres de campagne demandés dans les huit liens Shopify réels.

## Mise en œuvre
1. Créer un composant logo dédié, dimensionné à 280 × 80 px sur mobile, avec un emplacement unique pour ajouter le futur fichier image et un fallback typographique « lépuremaison ».
2. Utiliser ce logo dans l’en-tête et rétablir lépuremaison dans le pied de page et les métadonnées de marque.
3. Créer une configuration Meta visible contenant `REMPLACER_PIXEL_ID`, puis brancher le chargement du pixel et `PageView` sans `InitiateCheckout`, `Purchase`, `AddToCart` ni autre événement local.
4. Limiter la conservation aux paramètres `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `fbclid` et `ttclid`.
5. Remplacer les huit placeholders Shopify par les URLs fournies, sans modifier les suffixes `:1`.
6. Vérifier le rendu mobile et ordinateur, le pixel, les redirections et les paramètres transmis.

## Emplacements livrés
- Composant logo dédié dans les composants produit.
- Configuration pixel dans `src/config`.
- Configuration checkout dans `src/config/checkout.ts`.
