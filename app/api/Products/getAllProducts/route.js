import axios from 'axios';
import { endpoints } from '../../config';



//Получение всех товаров с бэка с помощью серверного компонента

export async function GET() {
 
  const TOKEN_API = process.env.NEXT_PUBLIC_TOKEN_API;

  try {

    const response = await axios.get(endpoints.collections, {
      headers: {
        Authorization: `Bearer ${TOKEN_API}`,
      },
    });
    
    console.log(response.data.data)
    return new Response(JSON.stringify(response.data.data), {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response(JSON.stringify({ error: 'Ошибка при получении данных' }), {
      status: 500,
    });
  }
}
