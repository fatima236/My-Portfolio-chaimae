import { AngularNodeAppEngine } from '@angular/ssr/node'; 
import { IncomingMessage, RequestListener } from 'http';  // Importer IncomingMessage
import { getContext } from '@netlify/angular-runtime/context';

const angularAppEngine = new AngularNodeAppEngine();

/**
 * Fonction de gestion des requêtes Netlify
 */
export async function netlifyAppEngineHandler(request: IncomingMessage): Promise<Response> {  // Utiliser IncomingMessage comme type de requête
  const context = getContext();

  try {
    // Adapter la requête si nécessaire et appeler handle() avec un seul argument
    const result = await angularAppEngine.handle(request);

    // Retourner le résultat sous forme de Response
    return result instanceof Response ? result : new Response(result || 'Not found', { status: 404 });
  } catch (error) {
    // En cas d'erreur, retourner une réponse avec un statut 500
    return new Response('Error processing request', { status: 500 });
  }
}

/**
 * Le gestionnaire de requêtes utilisé par le CLI Angular (dev-server et pendant la build).
 */
export const reqHandler = netlifyAppEngineHandler;
