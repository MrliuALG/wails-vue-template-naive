export const piniaPersistence = (context) => {
    const storeId = context.store.$id;

    // 从 localStorage 读取保存的状态
    const storedState = localStorage.getItem(storeId);
    if (storedState) {
        try {
            const parsedState = JSON.parse(storedState);
            context.store.$patch(parsedState);
        } catch (error) {
            console.error(`Error parsing stored state for ${storeId}:`, error);
            // 清除损坏的数据
            localStorage.removeItem(storeId);
        }
    }

    // 订阅状态变化，自动保存到 localStorage
    context.store.$subscribe((mutation, state) => {
        localStorage.setItem(storeId, JSON.stringify(state));
    });
}