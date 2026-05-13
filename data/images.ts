/**
* Mapa central de imagens: cada require() aponta para um arquivo em assets/images/.
* Isso é empacotado pelo Metro bundler do React Native — não baixamos URLs da internet em tempo de execução.
*
* Colocar imagens aqui facilita trocar nomes e manter tipagem ImageSourcePropType.
*/
import type { ImageSourcePropType } from 'react-native';
 
export const AppImages = {
    restaurant: require('@/assets/images/restaurant.png') as ImageSourcePropType,
    restaurantAvatar: require('@/assets/images/restaurant-avatar.png') as ImageSourcePropType,
    productComboBigMacDuplo: require('@/assets/images/product-combo-big-mac-duplo.png') as ImageSourcePropType,
    productComboBraboMeltOnionRings: require('@/assets/images/product-combo-brabo-melt-onion-rings.png') as ImageSourcePropType,
    productComboMcCrispyElite: require('@/assets/images/product-combo-mcrispy-elite.png') as ImageSourcePropType,
    productComboDuploCheddarMcMelt: require('@/assets/images/product-combo-duplo-cheddar-mcmelt.png') as ImageSourcePropType,
    productLancheBigMac: require('@/assets/images/product-lanche-bigmac.png') as ImageSourcePropType,
    productLancheDuploQuarterao: require('@/assets/images/product-lanche-duplo-quarterao.png') as ImageSourcePropType,
    productLancheMcMelt: require('@/assets/images/product-lanche-mcmelt.png') as ImageSourcePropType,
    productLancheMcNificoBacon: require('@/assets/images/product-lanche-mcnifico-bacon.png') as ImageSourcePropType,
    productLancheDuploCheddarMcMelt: require('@/assets/images/product-lanche-duplo-cheddar-mcmelt.png') as ImageSourcePropType,
    productFritaGrande: require('@/assets/images/product-frita-grande.png') as ImageSourcePropType,
    productFritaMedia: require('@/assets/images/product-frita-media.png') as ImageSourcePropType,
    productFritaPequena: require('@/assets/images/product-frita-pequena.png') as ImageSourcePropType,
    productBebidaCocaCola: require('@/assets/images/product-bebida-coca-cola.png') as ImageSourcePropType,
    productBebidaFantaLaranja: require('@/assets/images/product-bebida-fanta-laranja.png') as ImageSourcePropType,
    productBebidaAguaMineral: require('@/assets/images/product-bebida-agua-mineral.png') as ImageSourcePropType,
    productSobremesaCasquinhaBaunilha: require('@/assets/images/product-sobremesa-casquinha-baunilha.png') as ImageSourcePropType,
    productSobremesaCasquinhaChocolate: require('@/assets/images/product-sobremesa-casquinha-chocolate.png') as ImageSourcePropType,
    productSobremesaCasquinhaMista: require('@/assets/images/product-sobremesa-casquinha-mista.png') as ImageSourcePropType,
};