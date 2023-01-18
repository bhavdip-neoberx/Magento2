<?php

namespace MageSpark\HelloWorld\Block\Index;

/**
 * Class Helloworld 
 *
 * @package MageSpark\HelloWorld\\Block\Index;
 */
class Helloworld extends \Magento\Framework\View\Element\Template
{
    /**
     * Constructor
     *
     * @param \Magento\Framework\View\Element\Template\Context  $context
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        array $data = []
    ) {
        parent::__construct($context, $data);
    }

    /**
     * @return string
     */
    public function getHelloWorldMessage()
    {
        return $this->test();
    }

    private function test()
    {
        return "tests";
    }
}