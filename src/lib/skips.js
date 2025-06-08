import apiClient from "@/api/apiClient";

export const fetchSkips = async () => {
  try {
    const { data } = await apiClient.get(
      '/by-location?postcode=NR32&area=Lowestoft'
    )
    return data;
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
